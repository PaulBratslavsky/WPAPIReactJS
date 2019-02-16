import React, { Component } from 'react';
import './App.css';

import Videos from './components/Videos';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    const apiUrl = "https://bjjandfriends.com/wp-json/wp/v2/videos";

    fetch(apiUrl)
      .then( response => response.json() )
      .then( myJson => {

        this.setState({
          data: myJson
        });
        
      });
    }

  render() {

    return (
      <div className="app-body">
        <h1>My Videos</h1>
        <Videos data={this.state.data}/>
      </div>
    );
  }
}

export default App;

