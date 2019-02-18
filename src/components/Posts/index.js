import React, { Component } from 'react';

// COMPONETS
import PostList from '../PostList';


class Posts extends Component {
    state = {
        data: [],
        url: "https://bjjandfriends.com/wp-json/wp/v2/posts",
        id: '',
        }
        
        async componentDidMount() {
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

    render() {
        console.log(this.state.data);
        return(
            <React.Fragment>
                <PostList 
                    data={this.state.data}
                    showSinglePostView={this.showSinglePostView } 
                /> 
            </React.Fragment>
        );
    }
}

export default Posts;
