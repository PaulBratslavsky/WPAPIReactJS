import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


class SinglePosts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
            title: ""
            }
    }
    
    async componentDidMount() {
        const currentPost = this.props.match.params.id;
        try {
            const data = await fetch(`https://bjjandfriends.com/wp-json/wp/v2/posts/${currentPost}`);
            const jsonData = await data.json();
            /* You can define the object and set it to state */
            this.setState({
            data: jsonData,
            title: jsonData.title.rendered,
            content: jsonData.content.rendered,
            postImageUrl: jsonData.better_featured_image.source_url
            });
        } catch(error) {
          console.log(error, 'Failed in loading Json ');
        }
    }

    
    render() {
        const postTitle = ReactHtmlParser(this.state.title);
        const postContent = ReactHtmlParser(this.state.content);
        console.log(this.state.data);
    return(
        
        <div>
            <h2>{postTitle}</h2>
            <div><img src={this.state.postImageUrl} alt={postTitle}/></div>
            <div>{postContent}</div>
        </div>
        
    );
}}

export default SinglePosts;