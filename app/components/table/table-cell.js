import React from 'react';

class TableCell extends React.Component{


  render() {
    return (
      <td className="table-cell">
        <span className="table-cell-text">{this.props.text}</span>
      </td>
    );
  }
}

module.exports = TableCell;
