import * as React from 'react';

import { Link, generatePath } from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-line.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterLine: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <TableRow className={classes.content}>
      <TableCell align="left">
        <img src={character.image} style={{ width: "5rem" }} />
      </TableCell>
      <TableCell align="left">
        <span>{character.id}</span>
      </TableCell>
      <TableCell align="left">
        {character.name}
      </TableCell>
      <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
    </TableRow>
  );
};
