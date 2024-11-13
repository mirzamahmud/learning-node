const http = require('http');
const jsonServer = require('./json_server.js'); // This should work if json_server.js is in the same directory

const fetchData = jsonServer.data;

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify(fetchData));
    res.end();
}).listen(5000);
