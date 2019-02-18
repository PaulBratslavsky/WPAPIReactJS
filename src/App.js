import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import './App.scss';

// COMPONENTS
import Videos from './components/Videos';
import Pages from './components/Pages';
import Posts from './components/Posts';
import Home from './components/Home';
import SinglePosts from './components/SinglePosts';
import Header from './components/Header';
import Lessons from './components/Lessons';




class App extends Component {

  

  render() {

    return (
      <div className="app-body">
          <BrowserRouter>
          
            <React.Fragment>
              <Header />
              <Switch>
                <Route path="/posts/:id" component={SinglePosts} />
                <Route path="/videos" component={Videos} />
                <Route path="/posts" component={Posts} />
                <Route path="/pages" component={Pages} />
                <Route path="/lessons" component={Lessons} />
                <Route path="/" exact component={Home} />
              </Switch>
            </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

