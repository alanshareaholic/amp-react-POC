import AmpCollection from 'ampersand-collection';
import RevenueEntry from '/models/revenue-entry';

var RevenueEntries = AmpCollection.extend({
    model: RevenueEntry,
});


module.exports = RevenueEntries;
