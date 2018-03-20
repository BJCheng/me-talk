const mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://admin:whatsapp-ben@ds129053.mlab.com:29053/whatsapp-ben';
var mongoConnection;

function connectDb(){
    if(!mongoConnection){
        console.log('getting new connection');
        mongoConnection = mongoClient.connect(url);
    }
    console.log('db connected');
    return mongoConnection;
}

module.exports = connectDb;