const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';

const port = 4040;

const server = http.createServer((req, res) => {
    req.setEncoding('utf8');
    req.on('data', data => {
        console.log('New Connection');
        const post = querystring.decode(data);
        console.log('Message: ' + post.msg);
    });

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
