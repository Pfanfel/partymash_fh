import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    margin: "20px 0px 30px 0px",
  },
  highlight: {
    backgroundColor: '#4caf50',
    color: '#fff',
  }
});


function GameTable({ games, settings }) {

  const classes = useStyles();

  function getClass(game) {
    return game.p1 === settings.userTeam || game.p2 === settings.userTeam ? classes.highlight : null;
  }

  return (
    <TableContainer component={Paper} className={classes.table} >
      <Table aria-label="simple table" >
        <TableBody>
          {games.map((game) => (
            <TableRow >
              <TableCell className={getClass(game)} align="left">{game.p1}</TableCell>
              <TableCell className={getClass(game)} align="center">VS</TableCell>
              <TableCell className={getClass(game)} align="right">{game.p2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameTable;