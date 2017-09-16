const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes/routes.js');
const handle = app.getRequestHandler()
const githubLogin = require('./routes/github-login.js')
const IPADDRESS = '13.229.48.160';
const PORT = 3000;

app.prepare()
.then(() => {
  const server = express()

  server.use('/github-login', githubLogin)
  server.get('/github-login', (req, res) => {
    res.send("it is ended finally")
  })

  server.get('/maps/:id', (req, res) => {
    console.log("ID PARAMS ------------", req.params.id);
    console.log('Request SESSION: >>>>>>', req.session)
    // res.send("maps page")
    app.render(req, res, '/gmaps')
  })

  server.get('/logout', (req, res) => {
    console.log("---------", req.session.authStatus)
    res.send("Logged out")
  })

  server.get('/newroute', (req, res, next) => {
    console.log("Newroute ====================================");
    next()
  }, (req, res, next) => {
    console.log("New route -----------------")
    res.send("hello")
  })

  server.get('/p/:id', (req, res) => {
    console.log("=====================  ", req);
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ',PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
