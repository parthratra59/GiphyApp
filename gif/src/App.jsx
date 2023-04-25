// import logo from './logo.svg';
import React from "react";
// import styled from "styled-components";
// import './App.css';
import GlobalStyle from './styles/GlobalStyle'
import Header from "./styles/Header";
import SearchContainer from "./styles/SearchContainer";
import Media from "./styles/Media";
const App=()=> {
  return (
    <>
    <GlobalStyle/>
    <div className="app">
      <div className="main">
      <Header/>
      {/* phele alignment ke liye h1 liya tha*/}
        {/* <h1>Let's Build the gif</h1> */}
        <SearchContainer/>
        {/* <h1>Media</h1> */}
        <Media/>
      </div>

    </div>
    </>
  );
}



export default App;
