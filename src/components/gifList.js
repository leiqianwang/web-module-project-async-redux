import React from 'react';
import gifList from '/components/gifList';
import Gif from '/components/Gif';


const gifList = (props) => {
 const  {gifs } = props;

 return (
    <div id='gifList'>

        {gifs.map(gif => {
         return (<Gif gif={gif} />)
        })}
    </div>
 )
}







export default gifList;