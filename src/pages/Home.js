import React from "react";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    height: 150,
    width: "50vw",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <NavBar
        leftSide="avatar"
        text="Party Mash"
        logo={true}
        rightSide="menu"
      />
      <Box mt="15vh">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="large"
              component={Link}
              to="/tournamentPreview"
            >
              <Typography align="center" variant="button">
                Turnier Erstellen
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="large"
              component={Link}
              to="/tournamentOverview"
            >
              <Typography align="center" variant="button">
                Code eingeben
              </Typography>
            </Button            
            >
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
