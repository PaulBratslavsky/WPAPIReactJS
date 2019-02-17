import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


export default class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map( item => {
                    const postExcerpt = ReactHtmlParser(item.excerpt.rendered);
                    const postTitle = ReactHtmlParser(item.title.rendered);
                    const postImageUrl = item.better_featured_image.source_url;

                    return(
                        <div key={item.id}>
                           {/*<Link to={`posts/${item.id}`}>{postTitle}</Link>*/}
                            <div>
                                <img className="post-image" src={postImageUrl} alt="My post image" />
                                <h2>{ postTitle }</h2>
                                <small>{item.id}</small>
                                { postExcerpt }
                                <button onClick={ () => this.props.showSinglePostView(item.id) }>Read More</button>
                            </div>
                            
                        </div>
                    );
                
                })}
      </div>
    )
  }
}
