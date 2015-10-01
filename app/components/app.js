import React from 'react';
import Header from './header.js';
import Table from './table/table.js';
import Fetcher from '../fetchers/revenue-fetcher.js';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      headers: ['Clicks', 'CTR', 'Gross', 'Impressions', 'Pub Revenue'],
      rows: []
    };
   }

  componentWillMount(){
    let inst = new Fetcher();

    inst.fetchData().then(collection => {
      this.setState({
        rows: collection.toJSON()
      });
    });

  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Table headers={this.state.headers} rows={this.state.rows}/>
      </div>
    );
  }
}

module.exports = App;
