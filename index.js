const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write("Welcome to nodejs learning");
    res.end();
});

server.listen(3000,()=>console.log("The server listening on port 3000 is now running"));