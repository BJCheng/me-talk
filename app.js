const express = require('express');
const app = express();
const configIo = require('./socket/index');
const configRoutes = require('./routes');

app.use('/bundle', express.static('bundle'));
app.use('/public', express.static('public'));

configRoutes(app);

app.set('port', 3000);

const httpServer = app.listen(app.get('port'), () => {
    console.log(`server listening at port ${app.get('port')}`);
});

configIo(httpServer);