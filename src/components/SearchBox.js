import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <React.StrictMode>
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type='search'
                placeholder='serach robots'
                onChange={searchChange}
            />
            <br />
        </React.StrictMode>
    )
}

export default SearchBox;