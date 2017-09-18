var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

const { insertDocuments } = require('./methods.js');
const url = 'mongodb://localhost:27017/test2'

MongoClient.connect(url, (err, db) => {
	assert.equal(null, err)
	console.log("Connected successfully to the server")
	insertDocument(db, () => db.close())
})

