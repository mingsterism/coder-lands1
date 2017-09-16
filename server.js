const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes/routes.js');
const handle = app.getRequestHandler()
const githubLogin = require('./routes/github-login.js')

app.prepare()
.then(() => {
  const server = express()

  server.use('/github-login', githubLogin)
  server.get('/github-login', (req, res) => {
    res.send("it is ended finally")
  })

  server.get('/maps/:id', (req, res) => {
    console.log("ID PARAMS ------------", req.params.id);
    // res.send("maps page")
    app.render(req, res, '/gmaps')
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


  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})