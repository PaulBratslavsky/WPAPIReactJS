import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import './App.css';

// COMPONENTS
import Videos from './components/Videos';
import Pages from './components/Pages';
import Posts from './components/Posts';
import Home from './components/Home';
import SinglePosts from './components/SinglePosts';




class App extends Component {

  

  render() {

    return (
      <div className="app-body">
          <BrowserRouter>
          
            <div>
              <header>
                <h1>My App</h1>
                <Link to="/">Home</Link>
                <Link to="/pages">Pages</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/posts">Posts</Link>
              </header>

              <Switch>
                <Route path="/posts/:id" component={SinglePosts} />
                <Route path="/videos" component={Videos} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/pages" component={Pages} />
                <Route path="/" exact component={Home} />
              </Switch>

            </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

