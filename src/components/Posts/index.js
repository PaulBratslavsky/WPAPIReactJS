import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

// COMPONETS
import PostList from '../PostList';
import PostSingle from '../PostsSingle';


class Posts extends Component {
    state = {
        data: [],
        url: "https://bjjandfriends.com/wp-json/wp/v2/posts",
        showSingle: true,
        id: '',
        sectionName: 'Blog Post'
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

        showSinglePostView = (id) => {
            console.log("button clicked with index of ", id);
            this.setState({
                showSingle: false,
                id: id,
                sectionName: "Single Page"
            });
            
        }

        handleBackToList = () => {
            console.log('take me back clicked');
            this.setState({
                showSingle: true,
                sectionName: "Blog Posts"
            })
        }

    render() {
        console.log(this.state.data);
        return(
            <div>
                <h2>{this.state.sectionName}</h2>

                {this.state.showSingle && <PostList 
                    data={this.state.data}
                    showSinglePostView={this.showSinglePostView } 
                /> } 
                
                { !this.state.showSingle && <PostSingle 
                    id={this.state.id}
                    handleBackToList={this.handleBackToList}
                    />}

                
                
            </div>
        );
    }
}

export default Posts;
