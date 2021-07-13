import React from 'react';
import Typography from '@material-ui/core/Typography';
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),

  },
  button: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
  },
}));

const CurrentGame = (props) => {

  const classes = useStyles();

  return (
    <>
      <NavBar logo={true} text="#45583" rightSide="menu" />
      <Box my={10}>
        <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
          <Typography variant="h1" gutterBottom align="center">
            Du spielst jetzt gegen Team 10!
        </Typography>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to={{ pathname: "/enterResult", visible: props.location.mode === "K.O." ? false : true }}
          >
            <Typography noWrap={true} variant="button">
              Ergebnis eintragen!
          </Typography>
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default CurrentGame;