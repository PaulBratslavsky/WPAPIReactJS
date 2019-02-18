import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

import '../../App.scss';



export default class PostList extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.data.map( item => {
          const postExcerpt = ReactHtmlParser(item.excerpt.rendered);
          const postTitle = ReactHtmlParser(item.title.rendered);
          const postImageUrl = item.better_featured_image.source_url;

          return(
              <div key={item.id} className="card">
                  <div>
                      { postImageUrl && <img className="post-image" src={postImageUrl} alt="My post image" />} 
                      <div><Link to={`posts/${item.id}`}>{postTitle}</Link></div>
                      { postExcerpt }
                  </div>
                  
              </div>
          );
                
                })}
      </div>
    )
  }
}
