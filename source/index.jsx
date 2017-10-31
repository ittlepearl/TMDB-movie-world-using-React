import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import ListView from './components/list-view/list-view.jsx';
import GalleryView from './components/gallery-view/gallery-view.jsx';
import DetailView from './components/detail-view/detail-view.jsx';
import HeaderNav from './components/header/header.jsx'

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render((
  <Router>
  <div>
    <HeaderNav history = {browserHistory}/>
    <Route path="/search" component={ListView} />
    <Route path="/gallery" component={GalleryView} />
    <Route path="/detail" component={DetailView} />
    <Route exact = {true} path="/" component={ListView} />
  </div>
  </Router>),
    document.getElementById('app')
);
