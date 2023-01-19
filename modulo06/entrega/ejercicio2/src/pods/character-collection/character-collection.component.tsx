import * as React from 'react';
import { generatePath, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { CharacterEntityVm, CharacterResponseVm } from './character-collection.vm';
import { CharacterLine } from './components/character-line.component';
import { CharacterCollectionContext } from './character-collection.context';
import * as classes from './character-collection.styles';


interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete} = props;

  /*const {target, setTarget, page, setPage} = React.useContext(CharacterCollectionContext);

  const showPageLinks = () => {
    const links = [];
    const nPages = characterResponse.info.pages;

    for (let i = 1; i <= nPages; i++)
        links.push(<Link to={{}} onClick = {() => {setPage(i)}}> {i} </Link>);
    return links;
  }*/

  const showCharacters = (characters) => {

    return (!characters.length)
      ? (<><TableRow><TableCell align = "left"><h3>Ningún personaje...</h3></TableCell></TableRow></>)
      : ( <ul className = {classes.list}>
            {characters.map((character) => <li key = {character.id}> <CharacterLine  character = {character} onEdit={onEdit} onDelete={onDelete} /> </li>)}
          </ul>
          );
 }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
       <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button>
      </div>

      <span>Encontrados {characterCollection.length} personajes. </span>

      <div className={classes.list}>
        {showCharacters(characterCollection)}
      </div>


    </div>
  );
};


