var socketIo = require('socket.io');
var uuid = require('uuid/v4');
var usersModel = require('../model/users');
var unregisteredUsersModel = require('../model/unregistered-users');

module.exports = async function (httpServer) {
    var io = socketIo(httpServer);

    let users = await usersModel.findAll();
    users.forEach((user) => {
        io.of(user.namespace).on('connection', (socket) => {
            console.log(`${user.email} connected with namespace: ${user.namespace}`);
            socket.on('sender-send', (data) => {
                let serverGenerateId = { id: uuid() };
                let newMsg = Object.assign({}, data, serverGenerateId);
                setTimeout(() => { socket.emit('sender-receive', newMsg) }, 1000);

                var theOtherSocket = io.of(data.theOther);
                theOtherSocket.emit('receiver-receive', newMsg);
            });
        });
    });

    let unregisteredUsers = await unregisteredUsersModel.findAll();
    unregisteredUsers.forEach((unregisteredUser) => {
        io.of(unregisteredUser.namespace).on('connection', (socket) => {
            console.log(`${unregisteredUser.name} connected with namespace: ${unregisteredUser.namespace}`);
            socket.on('sender-send', (data) => {
                let serverGenerateId = { id: uuid() };
                let newMsg = Object.assign({}, data, serverGenerateId);
                setTimeout(() => { socket.emit('sender-receive', newMsg) }, 1000);

                var theOtherSocket = io.of(unregisteredUser.theOtherNamespace);
                theOtherSocket.emit('receiver-receive', newMsg);

                //1. tell the sender the server has received
                //2. extract the namepsace of the receiver from sending message
                //3. load the only chatter from database, because it's an unregistered user
                //4. emit messages to this namespace
                //5. tell the sender if receiver has recerived
                //6. tell the sender if receiver has read
            });
        });
    });
};