import React from 'react';


class Modal extends React.Component{

  render() {
    return (
      <div className="modal">
        <div className="close-modal" onClick={this.props.close}></div>
        <div className="modal-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = Modal;
