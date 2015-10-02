import React from 'react';
import Header from './header.js';
import Table from './table/table.js';
import Fetcher from '../fetchers/revenue-fetcher.js';
import Modal from './modal.js';
import app from 'ampersand-app';
import localLinks from 'local-links';

import addons from 'react/addons';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      headers: ['Clicks', 'CTR', 'Gross', 'Impressions', 'Pub Revenue'],
      rows: [],
      modalOpen: false
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

  showModal(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  handleRoute(event){
    let pathname = localLinks.getLocalPathname(event);
    if (pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname, { trigger: true });
    }
  }

  render() {
    return (
      <div className="container" onClick={this.handleRoute.bind(this)}>
        <Header/>
        {this.state.modalOpen ?
          <ReactCSSTransitionGroup transitionName="modal" transitionAppear={true}>
            <Modal close={this.closeModal.bind(this)}>
              <span>This is modal content</span>
            </Modal>
          </ReactCSSTransitionGroup>
          : <ReactCSSTransitionGroup transitionName="modal"/>}
        <Table headers={this.state.headers} rows={this.state.rows}/>
        <button onClick={this.showModal.bind(this)}>Show Modal</button>
        <a href='/test'>Go To Test</a>
      </div>
    );
  }
}

module.exports = App;
