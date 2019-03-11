const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/', () => {
    const routePath = path.join(__dirname + '..', '..', '..', 'dist/' + 'index.html');
    res.sendFile(routePath);
});
app.use('/*', () => {
    const routePath = path.join(__dirname + '..', '..', '..', 'dist/' + 'index.html');
    res.sendFile(routePath);
});
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Server Running on port ${port}`))

