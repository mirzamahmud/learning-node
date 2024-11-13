const http = require('http');
const serverContent = require('./server_content');

const fetchData = serverContent.data();

/// ======== create a server object ===========
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    /// ========== write a response to the client ==============
    response.write(`${fetchData.name}, ${fetchData.email}`); 
    /// ========== end the response ==========
    response.end();
}).listen(3000);