/// =========== include module ==========
const http = require('http');

/// =========== to create HTTP server ===========
http.createServer((req, res) => {
    /// ========== add http header ===========
    res.writeHead(200, 'Success!', {'content-type': 'text/plain'});
    /// ========== write a response to the client ===========
    res.write(req.url);
    /// ========== end the response ==========
    res.end();
}).listen(3000);