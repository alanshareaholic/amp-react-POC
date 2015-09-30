import rest from 'rest';
import RevenueEntries from '/collections/revenue-entires';

const revenueURL = 'http://reporting.prod.shareaholic.com/publisher_revenue?domain=blog.shareaholic.com&start=1431043200&end=1431561600&interval=d&cid=spc,rc,display';


class RevenueFetcher{

  fetchData(){
    return rest(revenueUrl).then(this.parseData);
  }

  parseData(data){
    let base = data.data;
    let ret = {};

    for(let site in data){
      let {spc, display, rc} = site;

      if(spc){

      }
    }
  }

}

module.exports = RevenueFetcher;
