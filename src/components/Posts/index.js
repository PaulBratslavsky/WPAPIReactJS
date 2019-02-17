import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


class Posts extends Component {
    state = {
        data: [],
        url: "https://bjjandfriends.com/wp-json/wp/v2/posts",
        showMore: false
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
            <div>
                <h2>This is posts</h2>

                {this.state.data.map( item => {
                    const postExcerpt = ReactHtmlParser(item.excerpt.rendered);
                    const postTitle = ReactHtmlParser(item.title.rendered);
                    const postImageUrl = item.better_featured_image.source_url;

                    return(
                        <div key={item.id}>
                           <Link to={`posts/${item.id}`}>{postTitle}</Link>
                            <div>
                                <img className="post-image" src={postImageUrl} alt="My post image" />
                                <h2>{ postTitle }</h2>
                                { postExcerpt }
                                <button>Read More</button>
                            </div>
                        </div>
                    );
                
                })}
            </div>
        );
    }
}

export default Posts;
