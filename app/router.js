import Router from 'ampersand-router';
import React from 'react';
import App from './components/app.js';
import Err404 from './components/404.js';


let router = Router.extend({
  renderPage (page) {
    React.render(page, document.body);
  },

  routes: {
    '': 'home',
    'test(/)': 'err404'
  },

  home(){
    this.renderPage(<App/>);
  },

  err404(){
    this.renderPage(<Err404/>);
  }

});

module.exports = router;
