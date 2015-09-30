import React from 'react';
import App from './components/app.js';

import Fetcher from './fetchers/revenue-fetcher.js';

React.render(<App/>, document.getElementById('app'));

Fetcher.fetchData().then(function(collection){
  console.log(collection.toJson());
});
