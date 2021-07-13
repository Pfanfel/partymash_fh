import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    backgroundColor: '#fafafa',
  },
  border: {
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    borderRightColor: '#e0e0e0',
  },
}));

function TournamentTable({ standings }) {

  const classes = useStyles();

  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                className={classes.border}
              >
                VS
              </TableCell>
              {standings.map((team, index) => (
                <TableCell
                  key={index}
                  align="center"
                  className={classes.border}
                >
                  {team.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map((team) => (
              <TableRow >
                <TableCell align="center" className={classes.border} variant='head'>
                  {team.name}
                </TableCell>
                {standings.map((team) => (
                  <TableCell align="center" className={classes.border}>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TournamentTable;