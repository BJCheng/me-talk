const getUnregisteredUsers = require('./mongo-collections').unregisteredUsers;

function findAll() {
    return getUnregisteredUsers().then((collection) => {
        return collection.find().toArray();
    });
}

exports.findAll = findAll;