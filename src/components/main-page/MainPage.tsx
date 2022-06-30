 export {};
// import React, {useEffect, useState} from 'react';
// import PokemonTable from "./pokemon-table/pokemon-table";
// import SearchBar from "../searchBar/searchBar";
//
//
//
// const MainPage = () => {
//     const [allPokemons, setAllPokemons] = useState([])
//     const [loadMore, setLoadMore] = useState('https://pokeapi.co/v2')
//
//     const getAllPokemons = async () => {
//         const res = await fetch(loadMore)
//         const data = await res.json()
//
//         console.log(data)
//     }
//
//     useEffect(() => {
//         getAllPokemons()
//     },[])
//
//     return (
//         <>
//             <div className={'pokemonHeader'}>POKEMON Evolution</div>
//             <SearchBar />
//             <PokemonTable />
//             <div><button className={'load-more'}>Load more</button></div>
//         </>)
// };
//
//
// export default MainPage;