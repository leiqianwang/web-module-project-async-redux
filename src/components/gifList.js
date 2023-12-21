import React from 'react';
import gifList from '/components/gifList';
import Gif from '/components/Gif';

import { Connect } from 'react-redux';


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


const mapStateToProps = state => {
     return {
        gifs: state.gifs
     }
}




export default Connect(mapStateToProps)(gifList);