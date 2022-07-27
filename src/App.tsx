import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/main-page/MainPage";
import ApolloClient from 'apollo-boost'; // ApolloClient is a default import
import{ ApolloProvider } from "@apollo/react-hooks";
import {PokemonsContainer} from "./containers/PokemonsContainer"; // ApolloProvider is a "named" import


function App() {
    const client = new ApolloClient<any>({
        uri: 'https://graphql-pokemon.now.sh'
    }) as any;

    return (
    <div className="App">
      <MainPage />

    </div>
  );
}

export default App;
