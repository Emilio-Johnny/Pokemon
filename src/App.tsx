import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MainPage from "./components/main-page/MainPage";
import ApolloClient from 'apollo-boost'; // ApolloClient is a default import
import{ ApolloProvider } from "@apollo/react-hooks"; // ApolloProvider is a "named" import



function App() {
    const client = new ApolloClient({
        uri: 'https://graphql-pokemon.sh'
    }) as any;

    return (
      <ApolloProvider client={client}>
          <main>
              <p>I am a Pokemon!</p>
          </main>
      </ApolloProvider>
    // <div className="App">
    //   <MainPage />
    //
    // </div>
  );
}

export default App;
