var mongoCollections = require('./mongo-collections');
var getUsersCollection = mongoCollections.users;
var getMessagesCollection = mongoCollections.messages;

function findWithEmail(email) {
    return getUsersCollection().then((usersCollection) => {
        return usersCollection.findOne({ email: email });
    });
}

function findAll() {
    return getUsersCollection().then((usersCollection) => {
        return usersCollection.find().toArray();
    });
}

function findAllMessages() {
    return getMessagesCollection().then((messagesCollection) => {
        return messagesCollection.find().toArray();
    });
}

function verifyAccount(email, password) {
    return getUsersCollection().then((usersCollection) => {
        return usersCollection.findOne({ email: email });
    }).then((userDocument) => {
        if (!userDocument)
            throw ('email not found');
        if (userDocument.password != password)
            throw ('password not matched');
        return userDocument.namespace;
    });
}

exports.verifyAccount = verifyAccount;
exports.findAll = findAll;