/// =========== include module ==========
const http = require('http');

/// =========== to create HTTP server ===========
http.createServer((req, res) => {
    /// ========== add http header ===========
    res.writeHead(200, 'Success!', {'content-type': 'text/html'});
    /// ========== write a response to the client ===========
    
}).listen(3000);