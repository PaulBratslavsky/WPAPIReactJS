import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

class Posts extends Component {
    state = {
        data: []
        }
        
        componentDidMount() {
            const apiUrlposts = "https://bjjandfriends.com/wp-json/wp/v2/posts";
    
            fetch(apiUrlposts)
                .then( response => response.json() )
                .then( Posts => {
    
                this.setState({
                    data: Posts
                });
            
            });
        }
    render() {
        console.log(this.state.data);
        return(
            <div>
                <h2>This is posts</h2>

                {this.state.data.map( item => {
                    
                    return(
                        <div key={item.id}>
                            <Link to={`posts/${item.id}`}>{item.title.rendered}</Link>
                            <div>{item.excerpt.rendered}</div>
                        </div>
                    );
                
                })}
            </div>
        );
    }
}

export default Posts;
