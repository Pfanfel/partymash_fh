import React from "react";
import { Typography, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function ProConItem(props) {

    const useStyles = makeStyles((theme) => ({
      operator: {
            fontWeight: 900,
            fontSize:"1.1em"
        }
      }));


    const classes = useStyles();


  return (
    <>
        <ListItem>
          <Typography
            variant="body1"
            align="left"
          >
            <span className={classes.operator}>{props.textDecoration}</span> {props.value}
          </Typography>
        </ListItem>
    </>
  );
}

export default ProConItem;
