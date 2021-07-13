import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GameTable from './GameTable';
import NextGameNotice from "./NextGameNotice";

const useStyles = makeStyles({
  root: {
    padding: "25px",
  },
  alerts: {
    paddingBottom: "30px",
  },
});

function Games({ games, nextGameNotice, settings }) {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.alerts}>
        <NextGameNotice settings={settings} nextGameNotice={nextGameNotice} />
      </div>
      <Typography variant="h6" gutterBottom>
        Laufende Spiele
      </Typography>
      <GameTable games={games.filter(game => game.running)} settings={settings} />
      <Typography variant="h6" gutterBottom >
        Anstehende Spiele
      </Typography>
      <GameTable games={games.filter(game => !game.running)} settings={settings} />
    </Container>
  );
};

export default Games;
