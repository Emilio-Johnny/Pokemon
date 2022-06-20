import React, { useState } from 'react';

const SearchBar = () => {
    // useState is a builtin function within React (Hook)
    const [searchTerm, setSearchTerm] = useState("fire");
    return <input value={searchTerm} onChange={(event => setSearchTerm(event.target.value)) } type={'search'}/>;
};

export default SearchBar;