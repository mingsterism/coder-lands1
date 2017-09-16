var fs = require('fs')

fs.readFile('./keys.txt', 'utf8', (err, data) => {
  if (err) throw err
  const obj = JSON.parse(data)
  console.log(obj)
})

