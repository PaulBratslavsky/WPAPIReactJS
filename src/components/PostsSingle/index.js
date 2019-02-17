import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


class PostSingle extends Component {
  state = {
    data: []
  }

  async componentWillMount() {
    console.log(this.props.id, 'from comp did ');
    const id = 343;
    const url = `https://bjjandfriends.com/wp-json/wp/v2/posts/${id}`;

    try {
        const data = await fetch(url);
        const jsonData = await data.json();

        this.setState({
        data: jsonData
        });
    } catch(error) {
      console.log(error, 'Failed in loading Json ');
      }
    }


    render() {

      console.log(this.state.data, " Did it work");

    return(
      <div>
        <h1>single post</h1>
        <h2>{this.props.id}</h2>
        <button onClick={this.props.handleBackToList}>Back To Post</button>
      </div>
    );
  

    }
    
}

export default PostSingle
