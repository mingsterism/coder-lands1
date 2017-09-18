var assert = require('assert');
var MongoClient = require('mongodb').MongoClient

const db = require('./mongodb.js')

var findDocuments = (url, colName, dbs=db) => {
	let database = null;
	dbs.open(url)
		.then((db) => {
			database = db
			return db.collection(colName)
		})
		.then((collection) => {
			return collection.find({})
		})
		.then((results) => {
			results.toArray( (err, docs) => {
				if (err) {
					database.close()
				} else {
					console.log(docs)
				}
				database.close()
			})
		})
		.catch((err) => {
			console.error(err)
		})
}

const insertDocument = (object, url, colName, dbs=db) => {
	let database = null;
	dbs.open(url)
		.then((db) => {
			database = db;
			return db.collection(colName)
		})
		.then((users) => {
			return users.insert(object)
		})
		.then((result) => {
			console.log(result)
			database.close()
		})
		.catch((err) => {
			console.error(err)
		})
}

module.exports = {
	findDocuments: findDocuments, 
	insertDocument: insertDocument, 
}
