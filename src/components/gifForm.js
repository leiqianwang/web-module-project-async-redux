import React from 'react';
import React, { useState } from 'react';

const GifForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue); // Pass the input value to the parent component
        setInputValue(''); // Reset the input field after submit
    };

    return (
        <div className="gifForm">
            <h1>Search Trending Gifs</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default GifForm;