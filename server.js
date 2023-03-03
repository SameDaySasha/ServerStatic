const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileContent = fs.readFileSync('./index.html')


    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html')
    
    res.end(fileContent)
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));