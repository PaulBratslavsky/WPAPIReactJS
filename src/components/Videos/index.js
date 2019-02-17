import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


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

        
        const showData = data.map( ( item ) => {
            const videoContent = ReactHtmlParser(item.acf.videourl);
            return(
                <div key={item.id}>
                    <h1>{item.title.rendered}</h1>
                    <div>{item.acf.position}</div> 
                    <div>{videoContent}</div>
                </div>
            );
        });

        return(
            <div>
                <h2>This is videos</h2>
                <div>{showData}</div>
            </div>
        );
    }
}

export default Videos;
