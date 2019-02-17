import React, { Component } from 'react';

class SinglePosts extends Component {
    state = {
        data: []
        }
        
        componentDidMount() {
            const currentPost = this.props.match.params.id;
            const apiUrlSinglePost = `https://bjjandfriends.com/wp-json/wp/v2/posts/${currentPost}`;
            
            fetch(apiUrlSinglePost)
                .then( response => response.json() )
                .then( Post => {
    
                this.setState({
                    data: Post
                });
            
            });
        }
    
    render() {
        const currentPost = this.state.data;
        console.log(currentPost.title, 'from test');
    return(
        
        <div>
            <small>{currentPost.id}</small>
            <h2></h2>

        </div>
        
    );
}}

export default SinglePosts;