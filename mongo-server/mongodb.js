var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

function open(url) {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, (err, db) => {
			if (err) {
				reject(err);
			} else {
				resolve(db)
			}
		});
	})
}

function close(db) {
	if (db) {
		db.close()
	}
}

let db = {
	open: open, 
	close: close
}

module.exports = db;
