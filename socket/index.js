var socketIo = require('socket.io');

module.exports = function (httpServer) {
    var io = socketIo(httpServer);
    // io.on('connection', (socket) => {
    // });

    //TODO: extract all the namespaces from database and set socket
    io.of('lpaben62').on('connection', (socket)=>{
        console.log('lpaben62 connected');
        socket.on('client-send', (data)=>{
            console.log('data from lpaben62', data);
            var theOtherSocket = io.of(data.theOther);
            theOtherSocket.emit('from-server', {remoteMsg: data.msg, sender: 'lpaben62'});
        });
    });

    io.of('un-1').on('connection', (socket) => {
        console.log('un-1 connected');
        socket.on('client-send', (data) => {
            console.log('data from un-1', data);

            //1. tell the sender the server has received
            //2. extract the namepsace of the receiver from sending message
            var theOther = data.theOther;
            //3. load the only chatter from database, because it's an unregistered user
            //4. emit messages to this namespace
            var theOtherSocket = io.of('lpaben62');
            theOtherSocket.emit('from-server', {remoteMsg: data.msg, sender: 'un-1'});
            //5. tell the sender if receiver has recerived
            //6. tell the sender if receiver has read
        });

        socket.on('disconnect', () => {
            console.log('a user disconnected');
        });
    });
};