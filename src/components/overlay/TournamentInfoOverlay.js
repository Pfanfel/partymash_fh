import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import ProConItem from "./ProConItem"
import { List, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';


function TournamentInfoOverlay(props) {


  

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "90vw",
      margin:"auto"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>
      <Box mx="auto" px={5}>
      <Typography
        variant="body1"
        paragraph="true"
        align="center"
      >{props.infoText}</Typography>
      </Box>
      <List >
        {props.pros.map((pro) => (
          <ProConItem 
            key={pro.id}
            textDecoration="+" 
            value={pro.value} 
          >
          </ProConItem>
        ))}
      </List>
      <List>
        {props.cons.map((con) => (
          <ProConItem 
          key={con.id}
          textDecoration="-" 
          value={con.value} 
          >
          </ProConItem>
        ))}
      </List>
      
  </Dialog>
  );
}

export default TournamentInfoOverlay;
