const routes = module.exports = require('next-routes')();
const githubLogin = require('./github-login.js');

routes 
  .add(githubLogin)