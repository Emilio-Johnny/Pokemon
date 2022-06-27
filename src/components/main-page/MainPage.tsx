import React from 'react';
import PokemonTable from "./pokemon-table/pokemon-table";
import SearchBar from "../searchBar/searchBar";

const MainPage = () => {
    return (
        <>
            <div className={'pokemonHeader'}>POKEMON SEARCH</div>
            <SearchBar />
            <PokemonTable />
        </>)
};


export default MainPage;