import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";

const Nav =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`
const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  color: white;
  padding: .9%;
  background-color: lightskyblue;
  &:hover {
    background-color: lightseagreen;
  }
`


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Nav>
        <StyledLink to="/">Welcome Page</StyledLink>
        <StyledLink to="/Characters">Characters</StyledLink>
      </Nav>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/Characters" component={CharacterList}/>
    </main>
  );
}
