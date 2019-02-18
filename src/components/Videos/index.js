import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../App.scss';
import './videos.scss';


class Videos extends Component {
    state = {
    data: [],
    url: "https://bjjandfriends.com/wp-json/wp/v2/videos"
    }

    // NEED TO LEARN MORE ABOUT ASYNC AND AWAIT
    async getVideosFromApi() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
    
            this.setState({
            data: jsonData
            });
        } catch(error) {
          console.log(error, 'Failed in loading Json ');
        }
    }

    componentDidMount() {
        this.getVideosFromApi();
    }
    
    render() {
        
        const data =  this.state.data;
        console.log(data, 'this is from wp');

        
        const showData = data.map( ( item ) => {
            const videoContent = ReactHtmlParser(item.acf.videourl);
            return(
                <div key={item.id} className="card">
                    <header className="video-header">
                        <h1 className="video-title">{item.title.rendered}</h1>
                    </header>
                    
                    <div className="videoWrapper">{videoContent}</div>
                    {/*<div>{item.acf.position}</div>*/}
                </div>
            );
        });

        return(
            <div className="cards">{showData}</div>
        );
    }
}

export default Videos;


/* 
    old way
    componentDidMount() {
        const apiUrlvideos = "https://bjjandfriends.com/wp-json/wp/v2/videos";

        fetch(apiUrlvideos)
            .then( response => response.json() )
            .then( Videos => {

            this.setState({
                data: Videos
            });
        
        });
    }

*/