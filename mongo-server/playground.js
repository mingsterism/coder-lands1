var {insert, findDocuments} = require('./basic-methods.js')


findDocuments('mongodb://localhost:27017/testing3', 'users1')
insert({"name": "Randal"}, 'mongodb://localhost:27017/testing3', 'users1')
