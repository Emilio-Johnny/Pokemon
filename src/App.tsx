import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MainPage from "./components/main-page/MainPage";
import ApolloClient from 'apollo-boost';
import{ ApolloProvider } from "@apollo/react-hooks";




function App() {
    const client = new ApolloClient<any>({
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
