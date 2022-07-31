import React from 'react';
import { Link, useParams } from "react-router-dom";

import {CharacterEntity} from "./rickmorty";

export const RickMortyDetailPage: React.FC = () => {
  const { id } = useParams();

  
  const [character, setCharacter] = React.useState<CharacterEntity>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
    },
    []);

    const showCharacter = (character: CharacterEntity) => {
      return ((!character) 
        ? (<h3>Loading...</h3>) 
        : (
          <>
          <img src={character.image} style={{ width: "5rem" }} />
          <h3>Character Id: {id}</h3>
          <h3>Name: {character.name}</h3>
          <h3>Status: {character.status}</h3>
          <h3>Species: {character.species}</h3>
          <h3>Type: {character["type"]}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin.name}</h3>
          <h3>Location: {character.location.name}</h3>
          <h3>Episode: {character.episode}</h3>
          <h3>URL: {character.url}</h3>
          <h3>Created: {character.created}</h3>
          </>));
    }


  return ( <>
        <h2>Rick Morty character detail page</h2>
        {showCharacter(character)}
        <Link to="/rickmorty">Back to list page</Link>
      </> 
  ); 
};

