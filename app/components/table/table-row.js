import React from 'react';
import TableCell from './table-cell.js';
import TableHeader from './table-header.js';

class TableRow extends React.Component{

  render() {
    if(this.props.isHeader){
      return (
        <tr>
          {this.props.headers.map(header => {
            return (
              <TableHeader text={header}/>
            );
          })}
        </tr>
      );
    }

    return (
      <tr>
        { this.props.cols.map(value => {
          return (
            <TableCell text={value}/>
          );
        })}
      </tr>
    );
  }
}

module.exports = TableRow;
