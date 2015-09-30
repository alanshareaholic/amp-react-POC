import rest from 'rest';
import mime from 'rest/interceptor/mime';
import RevenueEntries from '../collections/revenue-entires.js';

const http = rest.wrap(mime);

//const revenueURL = 'http://reporting.prod.shareaholic.com/publisher_revenue?domain=blog.shareaholic.com&start=1431043200&end=1431561600&interval=d&cid=spc,rc,display';
const revenueURL = 'http://localhost:3334/rev.json';


class RevenueFetcher{

  fetchData(){
    return http(revenueURL).then(data => this.parseData(data.entity.data));
  }

  parseData(data){
    let ret = {};
    let revenueEntires = new RevenueEntries();

    for(let site in data){
      let {spc, display, rc} = data[site];

      if(spc){
        for(let timestamp in spc){
          let model = spc[timestamp];
          model.timestamp = Number(timestamp);
          revenueEntires.add(model);
        }
      }
    }

    return revenueEntires;
  }

}

module.exports = RevenueFetcher;
