var cryptex = require('cryptex');

cryptex.getSecret('clientID').then( (id) => {
  console.log(id);
})