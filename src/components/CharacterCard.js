import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  display: flex;
  width: 30%;
  flex-direction: column;
`

export default function CharacterCard(props) {
  return (
    <>
    <StyledDiv>
    <img alt={props.name} src={props.image}/>
    <h3>{props.name}</h3>
    <p><b>Status:</b> {props.status}</p>
    <p><b>Species:</b> {props.species}</p>
    <p><b>Gender:</b> {props.gender}</p>
    </StyledDiv>
    </>
  );
}
