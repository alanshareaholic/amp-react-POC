import React from 'react';
import TableCell from './table-cell.js';

class TableHeader extends React.Component{

  render() {
    return (
      <th className="table-header">
        <span className="table-cell-text">{this.props.text}</span>
      </th>
    );
  }
}

module.exports = TableHeader;
