// don't know why this would cause errors
// import mongoCollections from './mongo-collections';
var getMessagesCollection = mongoCollections.messages;

function findAll() {
	return getMessagesCollection().then((messagesCollection) => {
			return messagesCollection.find().toArray();
	});
}

exports.findAll = findAll;