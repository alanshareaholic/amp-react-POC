import React from 'react';
import TableRow from './table-row.js';

class Table extends React.Component{

  render() {
    let rows = [];
    if(this.props.rows.length){
      rows = this.props.rows.map(row => {
        //transform data to match columns
        let rowData = [];
        rowData.push(row.clicks);
        rowData.push(row.ctr);
        rowData.push(row.gross_revenue);
        rowData.push(row.impressions);
        rowData.push(row.pub_revenue);
        return (
          <TableRow cols={rowData}/>
        );
      });
    }

    return (
      <table className="table">
        <TableRow isHeader={true} headers={this.props.headers}/>
        {rows}
      </table>
    );
  }
}

module.exports = Table;
