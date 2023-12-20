import React from "react";

const Gif = props => {
    const { gif } = props;


    return (
        <div class="gif" style="width: 18rem;">
            <h2>{gif.title}</h2>
            <p>{gif.username}</p>
            <img width="300" src={gif.images.original.url} />
            <div class="gif-body">
                <p>Rating: <strong>{gif.rating}</strong></p>
                <a target="_blank" href={gif.url}>Check it out on Giphy</a>
            </div>
        </div>
    )
}



export default gif;