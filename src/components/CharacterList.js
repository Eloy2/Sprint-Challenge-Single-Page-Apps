import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("res", response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
        // console.log("char", characters);
      })
      .catch(err => console.log("API error", err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <br/>
      <StyledDiv>
        <SearchForm change={handleInputChange} query={query}/>
      </StyledDiv>
      <br/>
      <StyledDiv>
        {data.map((character, index) => {
          return (
            <CharacterCard key={index}
            image={character.image}
            name={character.name} 
            status={character.status} 
            species={character.species}
            gender={character.gender}
            />
          )
        })}
      </StyledDiv>
    </section>
  );
}
