import AmpCollection from 'ampersand-collection';
import RevenueEntry from '../models/revenue-entry.js';

var RevenueEntries = AmpCollection.extend({
    model: RevenueEntry,
});


module.exports = RevenueEntries;
