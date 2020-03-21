import React from "react";
import styled from "styled-components";

const StyledDiv =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledDiv>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </StyledDiv>
      </header>
    </section>
  );
}
