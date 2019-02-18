import React, { Component } from 'react';

class Videos extends Component {
    state = {
    data: []
    }
    
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
    
    render() {
        
        const data =  this.state.data;
        console.log(data, 'this is from wp');

        // THIS FUNCTION GETS VIDEO ID FROM YOUTUBE AND RETURNS USABLE URL
        const getId = (url) => {
            // Regular expresion gets URL video ID from URL
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
    
            if (match && match[2].length === 11) {
                return match[2];
            } else {
                return 'error';
            }
        }

        const showData = data.map( ( item ) => {
            const videoUrl = item.acf.videourl;

            const videoId = getId(videoUrl);
            const finalUrl = `https://www.youtube.com/embed/${videoId}`;
    
            const iframeMarkup = 
                <iframe 
                    title={item.id}
                    width="100%" 
                    height="300" 
                    src={finalUrl} 
                    frameBorder="0" 
                    allowFullScreen="0">
                </iframe>;

            return(
                <div key={item.id} className="card">
                    <h1>{item.title.rendered}</h1>
                    <div>{item.acf.position}</div> 
                    {iframeMarkup}
                </div>
            );
        });

        return(
            <div className="cards">{showData}</div>
        );
    }
}

export default Videos;
