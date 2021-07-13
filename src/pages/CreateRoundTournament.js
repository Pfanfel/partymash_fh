import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SettingsElement from "../components/tournamentSettings/SettingsElement";
import Box from "@material-ui/core/Box";
import { roundTournamentSettings, tournamentInfo } from "../const/Tournamentdata";
import TournamentInfoOverlay from "../components/overlay/TournamentInfoOverlay"

const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
    width: 300,
  },
  root: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  grid: {
    // marginTop: 16,
    // marginBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
  },
}));

function renderSettings(items) {
  return items.map((item) => (
    <Grid 
      key={item.id}
      item
    >
      <SettingsElement
        key={item.id}
        id={item.id}
        text={item.text}
        controlElement={item.controlElement}
        maxValue={item.maxValue}
        minValue={item.minValue}
      />
    </Grid>
  ));
}

function CreateRoundTournament() {
  const classes = useStyles();

  const settings = roundTournamentSettings
  const tinfo = tournamentInfo //tinfo[1] is Rundenturnier
  const [modalVisible, setModal] = React.useState(false)

  const handleOpen = () => {
    setModal(true)
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <NavBar
        leftSide="arrow"
        text="Rundenturnier Erstellen"
        rightSide="info"
        rightSideOnClick={handleOpen}
      />
      {/**Spacing lieber mit den Material UI eingabuten sachen  https://material-ui.com/system/spacing/*/}
      <Box mx={2} my={2}>
        {/**https://stackoverflow.com/questions/45519275/grid-in-material-ui-causes-horizontal-scroll-react*/}
        <Grid
          // className={classes.grid}
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={4}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          {renderSettings(settings.settingElementsTop)}
          <Divider variant="middle" />
          {renderSettings(settings.settingElementsMiddle)}
          <Divider variant="middle" />
          {renderSettings(settings.settingElementsBottom)}
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Box mt={4}>
              <Button
                className={classes.button}
                color="secondary"
                variant="contained"
                size="large"
                component={Link}
                to={{ pathname: "/teams", mode: "Rounds" }}
              >
                <Typography variant="button">Lobby erstellen</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TournamentInfoOverlay
        open={modalVisible}
        onClose={handleClose}
        title="Rundenturnier"
        infoText={tinfo[1].infoText}
        pros={tinfo[1].pros}
        cons={tinfo[1].cons}
      />
    </div>
  );
}

export default CreateRoundTournament;
