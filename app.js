const express = require('express');
const app = express();
const configIo  = require('./socket/index');

app.use('/bundle', express.static('bundle'));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

app.set('port', 3000);

const httpServer = app.listen(app.get('port'), () => {
    console.log(`server listening at port ${app.get('port')}`);
});

configIo(httpServer);