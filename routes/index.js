var path = require('path');
var users = require('../model/users');

function configRoutes(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });

    app.get('/chat', (req, res) => {
        res.sendFile(path.resolve('chat.html'));
    });

    app.get('/verify', async (req, res) => {
        console.log('verifying in api server, req.query:', req.query);
        try{
            let namespace = await users.verifyAccount(req.query.email, req.query.password)
            return res.send(namespace);
        } catch(e){
            return res.status(500).send(e);
        }
    });
}

module.exports = configRoutes;