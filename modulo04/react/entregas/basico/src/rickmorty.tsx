import React from "react";
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';
import {useDebounce} from 'use-debounce';

import {ListContext, ListContextProvider} from "./list-context";
import { RickMortyLine } from "./rickmorty-line";

export interface CharacterEntity {
    id: number; //The id of the character.
    name: string; //The name of the character.
    status: string; //The status of the character ('Alive', 'Dead' or 'unknown').
    species: string; //The species of the character.
    type: string; //The type or subspecies of the character.
    gender: string; //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin:	{name: string, url: string}; //Name and link to the character's origin location.
    location: {name: string, url: string}; //Name and link to the character's last known location endpoint.
    image: string; //(url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
    episode: string[]; //List of episodes in which this character appeared.
    url: string; //(url)	Link to the character's own URL endpoint.
    created: string; //Time at which the character was created in the database.
}

export interface CharacterResponse {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: null
  };
  results: CharacterEntity[];
}

export const defaultCharacters: CharacterResponse = {
    info: {count: 0, pages: 0, next: "", prev: null},
    results: [
    {id: 0,
    name: "",
    status: "", 
    species: "",
    type: "",
    gender: "",
    origin:	{name: "", url: ""},
    location: {name: "", url: ""},
    image: "",
    episode: [],
    url: "",
    created: ""}]
}


export const RickMortyPage: React.FC = () => {

  
  const {target, setTarget, page, setPage} = React.useContext(ListContext);
  const [debouncedTarget] = useDebounce(target, 1000);

  const [characters, setCharacters] = React.useState<CharacterResponse>(defaultCharacters);
   
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${target}`)    
      .then((response) => (response.ok) ? (response.json()) : (defaultCharacters))
      .then((json) => setCharacters(json));
  },
    [page, debouncedTarget]);

    const handleChangeTarget = (e) => {
      setTarget(e.target.value);
      setPage(1);
    }

    const showPageLinks = () => {
      const links = [];
      const nPages = (characters) ? characters.info.pages : 0;
        
      for (let i = 1; i <= nPages; i++) 
          links.push(<Link onClick = {() => {setPage(i)}}> {i} </Link>);
      return links;
    }

   const showCharacters = (characters) => {
    
      return (!characters.info.count) 
        ? (<><TableRow><TableCell align = "left"><h3>Personaje no encontrado...</h3></TableCell></TableRow></>)
        : (<>{characters.results.map((character) => <RickMortyLine key = {character.id} character = {character}/>)}</>);
   } 

  return <>
    <ListContextProvider>
      <h2>Listado de personajes de Rick & Morty</h2>
      <h3>Introduce un personaje </h3>
      <h4>(Los resultados apareceran despues de 1 segundo, a 20 personajes por pagina)</h4>
      <input type="text" value= {target} onChange={(e) => handleChangeTarget(e)} />
      <br></br><br></br>
      <label>Puedes volver al listado por organizaciones <a href="/list"> aqui </a></label>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead>      
          <TableBody>
            {showCharacters(characters)}
          </TableBody>
        </Table>
      </TableContainer>
      {showPageLinks()}
      </ListContextProvider>
    </>;
};

