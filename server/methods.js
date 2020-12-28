
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export const collections = new Set()

Meteor.methods({
	/**
	 * Update the sortField of documents with given ids in a collection, incrementing it by incDec
	 * @param {String} collectionName - name of the collection to update
	 * @param {String[]} ids - array of document ids
	 * @param {String} orderField - the name of the order field, usually "order"
	 * @param {Number} incDec - pass 1 or -1
	 */
	'rubaxa:sortable/collection-update': function (collectionName, ids, sortField, incDec) {
		check(collectionName, String);
		// don't allow the client to modify just any collection
		if (collections.size === 0) {
			throw new Meteor.Error(500, 'Please add names of mongo collections to the Soratble\'s `collections` Set');
		}
		if (!collections.has(collectionName)) {
			throw new Meteor.Error(403, 'Collection <' + collectionName + '> is not Sortable. Please add it to Sortable.collections in server code.');
		}

		check(ids, [String]);
		check(sortField, String);
		check(incDec, Number);
		var selector = {_id: {$in: ids}}, modifier = {$inc: {}};
		modifier.$inc[sortField] = incDec;
		Mongo.Collection.get(collectionName).update(selector, modifier, {multi: true});
	}
});
