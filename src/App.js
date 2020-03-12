import React, { Component } from 'react';
import Blog from './components/BlogComponent';
import About from './components/AboutComponet';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <Route exact path="/" render={ ( ) => (<h2> HomePage </h2>) } />
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
        </div>
      </BrowserRouter>
    )
  }
}
