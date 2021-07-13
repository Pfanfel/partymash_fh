import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { id: 'name', label: 'Platz' },
  { id: 'code', label: 'Team' },
  { id: 'points', label: 'Punkte' },
];

const useStyles = makeStyles({
  headCell: {
    width: "calc(100% / 3)",
  },
  highlight: {
    backgroundColor: '#4caf50',
    color: '#fff',
  }
});

function Ranking({ ranking, settings }) {

  const classes = useStyles();

  function getClass(rank) {
    return rank.name === settings.userTeam ? classes.highlight : null;
  }

  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  className={classes.headCell}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((rank, index) => (
              <TableRow >
                <TableCell align="center" className={getClass(rank)}>
                  {index + 1}
                </TableCell>
                <TableCell align="center" className={getClass(rank)}>
                  {rank.name}
                </TableCell>
                <TableCell align="center" className={getClass(rank)}>
                  {rank.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Ranking;