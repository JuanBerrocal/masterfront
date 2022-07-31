import React from 'react';
import { Link, generatePath } from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {MemberEntity} from './list';

interface Props {
  member: MemberEntity;
}

export const ListLine: React.FC<Props> = (props) => {

  const {member} = props;

  return <>
      <TableRow>
        <TableCell align="left">
          <img src={member.avatar_url} style={{ width: "5rem" }} />
        </TableCell>
        <TableCell align="left">
          <span>{member.id}</span>
        </TableCell>
        <TableCell align="left">
          <Link to={generatePath("/detail/:id", { id: member.login })}>
            {member.login}
          </Link>
        </TableCell>
      </TableRow>
    </>;
}