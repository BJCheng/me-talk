const mongoConnection = require('./mongo-connection');

function getMongoCollection(collectionName) {
    let collection;

    return function () {
        if (!collection) {
            collection = mongoConnection().then((db) => {
                return db.collection(collectionName);
            }).catch((err)=>{
                throw(err);
            });
        }

        return collection
    }
}

module.exports = {
    users: getMongoCollection('users'), 
    unregisteredUsers: getMongoCollection('unregistered-users'),
    messages: getMongoCollection('messages')
}