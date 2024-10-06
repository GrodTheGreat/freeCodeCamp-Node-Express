const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    if (req.url === '/about') {
        res.end('Here is our history');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you were looking for</p>
        <a href="/">Go back home</a>
    `);
});

server.listen(5000);