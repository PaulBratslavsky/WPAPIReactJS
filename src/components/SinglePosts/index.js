import React, { Component } from 'react';

class SinglePosts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
            }
    }
    
    async componentDidMount() {
        const currentPost = this.props.match.params.id;

        console.log(this.props ,"from did mount");
        try {
            const data = await fetch(`https://bjjandfriends.com/wp-json/wp/v2/posts/${currentPost}`);
            const jsonData = await data.json();
    
            this.setState({
            data: jsonData
            });
        } catch(error) {
          console.log(error, 'Failed in loading Json ');
        }
    }

    
    render() {
        const post = this.state.data;
        console.log(post, 'from test');

        console.log( this.state.data, "curious");
    return(
        
        <div>
            <small>{post.id}</small>
            <h2></h2>

        </div>
        
    );
}}

export default SinglePosts;