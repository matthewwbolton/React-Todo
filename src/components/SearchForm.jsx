import React, { useState } from 'react';



const SearchForm = (props) => {

    const [query, setQuery] = useState();
    
    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.taskSearch(query);
    }
    
    return (
       
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search</label>
                <input onChange={handleChange} id='search' name='search' placeholder='Search' />
                <button type='submit'>Search</button>
            </form>
            
        </div>
    );
};

export default SearchForm;