import React from 'react';
import './App.css';
import gifData from './data/gifData';
import GifList from '../components/gifList';

function App(props) {
  const gifs =  gifData;
  const loading = false;
  const error = '';


  return (
    <div className="App">
     <h1>Search Trending Gifs</h1> 

      <form>
        <input type="text" value="text" />

        <button>Search</button>
    </form>

    {loading ?  <h3>We are loading</h3> : <GifList gifs={gifs} />
    
  }
    </div>

    
  );
}

export default App;