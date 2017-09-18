const express = require('express');
const url = require('url');
const randomString = require('randomstring')
const request = require('request');

const {insertDocument} = require('../mongo-server/basic-methods.js')

const githubRouter = express.Router();
const fs = require('fs')

const keys = JSON.parse(fs.readFileSync('./routes/keys.txt', 'utf8'))

const CLIENT_ID = keys['github_clientKey'];
const CLIENT_SECRET = keys['github_secretKey'];
const REDIRECT_URI = "http://54.255.247.84:3000/github-login/callback";
const GITHUB_AUTH_URL = "https://github.com/login/oauth/access_token";
const GITHUB_PAYLOAD_URL = "https://api.github.com/user";


const randString = randomString.generate();

const githubOauthParams = {
  client_id: CLIENT_ID, 
  redirect_uri: REDIRECT_URI,
  state: randString,
}

const payloadGithub = (OAUTH_TOKEN) => {
  return {
    url: GITHUB_PAYLOAD_URL, 
    headers: {
      Authorization: "token " + OAUTH_TOKEN, 
      "User-Agent": "mingsterism", 
    }
  }
}

const githubPostParams = (codeString) => {
   const postObj = {
      client_id: CLIENT_ID, 
      client_secret: CLIENT_SECRET,
      code: codeString, 
  }
   return postObj;
}

const requestOptions = (OAUTH_TOKEN) => {
  const payload = payloadGithub(OAUTH_TOKEN)
  // const payload = {
  //     url: "https://api.github.com/user", 
  //     headers: {
  //       Authorization: "token " + OAUTH_TOKEN,
  //       "User-Agent": 'mingsterism', 
  //     }
  //  }
  console.log("PAYLOAD --------", payload)
  return payload
}

const getGithubAccessCode = (req, res, next) => {
  console.log("Calling getGithubAccessCode ========================")
  const userData = request.post(
    { 
      url: GITHUB_AUTH_URL, 
      form: githubPostParams(req.query.code),
    }, 
    (err, httpResponse, body) => {
      if (err) {
        console.log("getGithubAccessCode: There was error")
        return 'error'      
      } else { 
        console.log("getGithubAccessCode: No errors in getGithubAccessCode")
        TOKEN = httpResponse.body.split("=")[1]
        TOKEN_FINAL = TOKEN.split("&")[0]
        return request(requestOptions(TOKEN_FINAL), (err, resp, body) => {
          console.log('body type: ', typeof(JSON.parse(body)))
	  insertDocument(JSON.parse(body), 'mongodb://localhost:27017/github', 'col1')
          return body
        })
      }
    }
  )

  if (userData == 'error') {
    console.log("There was error")
  } else {
    req.userGithubData = userData
    next();
  }
}

githubRouter.use((req, res, next) => {
  console.log("Calling githubRouter middleware")
  next()
})

githubRouter.get('/', (req, res) => {
  // res.send("hello main page")
  console.log("Initializing Request ...", Object.keys(req));
  res.redirect(url.format({
    pathname: "http://github.com/login/oauth/authorize", 
    query: githubOauthParams,
  }))
})


githubRouter.get('/callback', getGithubAccessCode, (req, res, next) => {
  console.log("calling githubRouter +++++++++++++++++++++++++++++")
  req.specialData = "specialdata"
  const id = 123
  res.redirect(url.format({
    pathname: "/maps/"+id, 
  }))
});

module.exports = githubRouter;
