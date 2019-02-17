import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


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
                    console.log(item.excerpt.rendered);

                    const postExcerpt = ReactHtmlParser(item.excerpt.rendered);
                    const postTitle = ReactHtmlParser(item.title.rendered);


                    return(
                        <div key={item.id}>
                            <Link to={`posts/${item.id}`}>{postTitle}</Link>
                            <div>
                                { postExcerpt }
                            </div>
                        </div>
                    );
                
                })}
            </div>
        );
    }
}

export default Posts;
