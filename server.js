const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  if(req.method === "GET" && req.url.startsWith('/static')){
    let path = './assets/';
    path += req.url.slice(8);

    res.statusCode = 200;
    if(req.url.endsWith('.css')) res.setHeader('Content-Typle', 'text/css');
    if(req.url.endsWith('.jpg')) res.setHeader('Content-Type', 'image/jpeg');
    return res.end(fs.readFileSync(path));
  }
  const html = fs.readFileSync('./index.html')
  


    res.statusCode = 200;

    res.setHeader("Content-Type", 'text/html')
    
    res.end(html);
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));
