import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import TournamentInfoOverlay from "../overlay/TournamentInfoOverlay";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import runden_turnierSVG from "../../images/runden_turnier.svg";
import ko_turnierSVG from "../../images/ko_turnier.svg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
    width: "70vw",
    maxWidth: 500
  },
  root: {
    width: "90vw",
    maxWidth: 600
  },
  media: {
    height: "auto",
    //minHeight: 300,
    minWidth: 300,
    padding: 20,
    margin:"auto",

  },
}));


function TournamentType(props) {

  const classes = useStyles();

  const [modalVisible, setModal] = React.useState(false);

  const handleOpen = () => {
    setModal(true)
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <Grid item>
    <Box mt={2}>
    <Card className={classes.root}>
      <CardActionArea
        onClick={handleOpen}
        >
        <CardMedia
          component="img"
          className={classes.media}
          image={props.tournamentType === "ko" ? ko_turnierSVG : runden_turnierSVG}
          title={props.name}
        ></CardMedia>
        <CardContent
        >
          <Typography gutterBottom variant="h1" component="h1">
            {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.teaserText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box mx="auto" my={2}>
        <Button className={classes.button}
          name={props.tournamentType}
          variant="contained"
          color="secondary"          
          component={Link}
          to={props.linkTo}>
          Erstellen
        </Button>
        </Box>
      </CardActions>
    </Card>
    <TournamentInfoOverlay
        open={modalVisible}
        onClose={handleClose}
        title={props.name}
        infoText={props.infoText}
        pros={props.pros}
        cons={props.cons}
      />
    </Box>
    </Grid>
  );

}

export default TournamentType;
