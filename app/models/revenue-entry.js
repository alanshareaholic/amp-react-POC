import AmpModel from 'ampersand-model';

var RevenueEntry = AmpModel.extend({
  props: {
    gross_revenue: 'number',
    view_impressions:'number',
    cpm: 'number',
    ctr: 'number',
    pub_revenue: 'number',
    impressions: 'number',
    clicks: 'number',
    timestamp: 'number'
  }
});

module.exports = RevenueEntry;
