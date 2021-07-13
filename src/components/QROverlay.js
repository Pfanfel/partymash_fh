import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import Box from "@material-ui/core/Box";
import Image from "material-ui-image";

function QROverlay(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    button: {
      margin: "0 auto",
    },
    media: {
      height: 150,
      width: 150,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",

      width: "50vw",
      margin:"auto"
    }
  }));

  const buttonStyle = {
    marginBottom: "10%",
  };

  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.open}
      onClose={props.close}
      className={classes.modal}
    >
      <Box px={5}>
      <Typography style={{ paddingTop: "15%" }} variant="h1">
        Lobby erstellt!
      </Typography>
      <p style={{ padding: "10px" }}>Teile den Code mit allen Teilnehmern</p>
      <p>Turniercode:</p>
      <Typography variant="h1">45583</Typography>
      <Box mx={5} my={5}>
        <Image src="qr.png" />
      </Box>

      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        size="medium"
        component={Link}
        to={{pathname: "/tournamentOverview", mode: props.mode}}
        style={buttonStyle}
      >
        <Typography noWrap={false} variant="button">
          Teilen
        </Typography>
        <ShareIcon style={{ marginLeft: "10%" }}></ShareIcon>
      </Button>
      </Box>
    </Dialog>
  );
}

export default QROverlay;
