import React from "react";
import NavBar from "../components/NavBar";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    button: {
      height: 50,
      width: "55vw",
      maxWidth: 600
    },
  }));
  
  
  
  function EnterResult(props){
    const classes = useStyles();
    const containerStyle = {
        textAlign: "center",
        padding: "20%"
    }

    let visibility = "none";
    if(props.location.visible){
        visibility = "block";
    }
    
    return (
        <>
        <NavBar leftSide="arrow" text="Ergebnis eintragen" rightSide="menu" />
    <div style={containerStyle}>
        
        <Typography variant="h1">Wie ist das Match gegen Team 10 ausgegangen?</Typography>
        <Box mt={5}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
            <Grid item>
                <Button 
                className={classes.button}
                color="secondary"
                variant="contained"
                component={Link}
                to={{pathname: "/tournamentOverview", mode: props.location.visible ? "Rounds" : "K.O."}}>
                    <Typography noWrap={true} variant="button">
                        Gewonnen
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button 
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                style={{display:visibility}}
                to={{pathname: "/tournamentOverview", mode: props.location.visible ? "Rounds" : "K.O."}}>
                    <Typography noWrap={true} variant="button">
                        Unentschieden
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button 
                    className={classes.button}
                    color="primary"
                    component={Link}
                    variant="outlined"
                    to={{pathname: "/tournamentOverview", mode: props.location.visible ? "Rounds" : "K.O."}}>
                    <Typography noWrap={true} variant="button">
                        Verloren
                    </Typography>
                </Button>
            </Grid>

        </Grid>
        </Box>
    </div>
    </>)
}

export default EnterResult;