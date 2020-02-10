const http = require('http');

const querystring = require('querystring');

const postData = querystring.stringify({ msg: 'hello server!!!' });

const options = {
    hostname: 'localhost',
    port: 4040,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

const req = http.request(options, res => {
    console.log('STATUS:', res.statusCode);
    res.setEncoding('utf8');
    res.on('data', (chunk) => console.log('BODY:', chunk));

    res.on('end', () => console.log('No more data in response.'));
});

req.on('error', (err) => console.log('Problem with request:', err.message));

req.write(postData);
req.end();
