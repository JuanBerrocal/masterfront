import React from "react";
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import Link from '@material-ui/core/Link';

import { generatePath, Link } from "react-router-dom";

import {ListContext, ListContextProvider} from "./list-context";
import { ListLine } from "./list-line";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {

  const {target, setTarget, page, setPage} = React.useContext(ListContext);
     
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [delayedTarget, setDelayedTarget] = React.useState('');

  const handleChangeName = (e) => {
    setTarget(e.target.value);
  }

  const showPageLinks = () => {
    const links = [];
    const nPages = Math.ceil((members.length / 5));

    for (let i = 1; i <= nPages; i++) 
        links.push(<Link to="/list" onClick = {() => {setPage(i)}}> {i} </Link>);
    return links;
  }

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${target}/members`)
      .then((response) => (response.ok) ? (response.json()) : ([]))
      .then((json) => setMembers(json));
    },
    [delayedTarget]);

  React.useEffect(() => {
    const updateMembers = setTimeout(() => {setDelayedTarget(target)}, 2000);
    return () => {clearTimeout(updateMembers)};
    },
    [target]);

  // Just refresh the member list from the selected page.
  React.useEffect(() => {},
    [page]);

  const showMembers = (members) => {
      
      return (!members.length) 
        ? (<><TableRow><TableCell align = "left"><h3>Ningún miembro de esa organización...</h3></TableCell></TableRow></>)
        : (members.slice((page - 1) * 5, ((page - 1) * 5) + 5).
        map((member) => <ListLine key = {member.id} member = {member}/>));
   } 

  return <>
    <ListContextProvider>
      <h2>Listado de miembros</h2>
      <h3>Introduce una organización, empresa, etc... </h3>
      <h4>(Los resultados apareceran despues de 2 segundos, a 5 miembros por pagina)</h4>
      <input type="text" value= {target} onChange={(e) => handleChangeName(e)} />
      <br></br><br></br>
      <label>Nota: Si este listado no te gusta, siempre puedes explorar la pagina de </label>
      <Link to="/rickmorty" onClick={() => {setTarget(""); setPage(1);}}> Rick&Morty </Link>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead>      
          <TableBody>
            {showMembers(members)}
          </TableBody>
        </Table>
      </TableContainer>
      {showPageLinks()}
      
      </ListContextProvider>
      
    </>;
};
