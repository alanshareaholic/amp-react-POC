import React from 'react';
// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

import Router from './router.js';
import App from 'ampersand-app';

App.extend({
  init(){
    this.router = new Router();
    this.router.history.start();
  }
}).init();



