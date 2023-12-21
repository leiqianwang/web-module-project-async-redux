import React from 'react';
import './App.css';
import gifData from '../data/gifData';
import GifList from '../components/gifList';
import { useEffect } from 'react';
import axios from 'axios';
import { fetchStart, fetchSuccess} from './actions';
import { Connect } from 'react-redux';

import gifForm from './components/gifForm';

function App(props) {
   const {loading, gifs, error, fetchStart, fetchSuccess} = props;
 


    useEffect(() => {
      props.fetchStart();
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=x2wmVDEAlhvbG9zjO97SHsKLxeLxohOE&q=funny&limit=10`)
      .then(res => {
        console.log(res.data.data);
         props.fetchSuccess(res.data.data);

      })
    }, []);


    const handleFormSubmit = (searchTerm) => {
      console.log(searchTerm); // Here you can replace this with an actual search function
      // ... rest of your logic for handling search
  };

      

  return (
    <div class="gif" >
      <gifForm onSubmit={handleFormSubmit} />

       {error !== "" && <h3>{error}</h3> }

    {loading ?  <h3>We are loading</h3> : <GifList gifs={gifs} />
    
  }
    </div>

    
  );
}

const mapStateToProps = state => {
     return {
      gifs:  state.gifs,
       loading: state.loading,
       error: state.error
     }
}
export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);