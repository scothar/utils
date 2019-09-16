// content of index.js
const http = require('http')
const port = 7002

const requestHandler = (req, res) => {
  console.log(req.body)
  res.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
