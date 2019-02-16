import React, { Component } from 'react';
import './App.css';

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

    const data =  this.state.data;
    console.log(data, 'this is from wp');

    const showData = data.map( ( item ) => {

      const videoUrl = item.acf.videourl;

      const getId = (url) => {
        // Regular expresion gets URL video ID from URL
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
    
    const videoId = getId(videoUrl);
    const finalUrl = `https://www.youtube.com/embed/${videoId}`;
    
    const iframeMarkup = 
      <iframe 
        width="100%" 
        height="300" 
        src={finalUrl} 
        frameBorder="0" 
        allowFullScreen="0">
      </iframe>;

      return(
        <div key={item.id}>
          <h1>{item.title.rendered}</h1>
          <div>{item.acf.position}</div>    
          {iframeMarkup}
        </div>
      );
    });

    return (
      <div className="App-header">
        <h1>My Videos</h1>
        {showData}
      </div>
    );
  }
}

export default App;

