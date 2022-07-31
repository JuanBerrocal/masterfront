import React from 'react';
import { Link, generatePath } from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {CharacterEntity} from './rickmorty';

interface Props {
  character: CharacterEntity;
}

export const RickMortyLine: React.FC<Props> = (props) => {

  const {character} = props;

  return <>
      <TableRow>
        <TableCell align="left">
          <img src={character.image} style={{ width: "5rem" }} />
        </TableCell>
        <TableCell align="left">
          <span>{character.id}</span>
        </TableCell>
        <TableCell align="left">
          <Link to={generatePath("/rickmortydetail/:id", { id: (character.id + '') }) }>
            {character.name}
          </Link>
        </TableCell>
      </TableRow>
    </>;
}