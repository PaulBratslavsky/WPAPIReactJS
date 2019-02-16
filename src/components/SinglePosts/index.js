import React from 'react';

const SinglePosts = (props) => {
    return(
        <div>
            <h2>This is the post template {props.match.params.id}</h2>
        </div>
        
    );
}

export default SinglePosts;