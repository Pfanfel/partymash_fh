import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import GroupedButtons from "./GroupedButtons";
import Switch from "@material-ui/core/Switch";

// const useStyles = makeStyles({});

function SettingsElement(props) {
  // const classes = useStyles();

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  function renderControlElement(props) {
    switch (props.controlElement) {
      case "switch":
        return (
          <Switch
            key={props.id}
            checked={state.checked}
            onChange={handleChange}
            color="primary"
            name="checked"
            inputProps={{ "aria-label": "Settings" }}
          />
        );
      case "incrementer":
        return (
          <GroupedButtons
            id={props.id}
            maxValue={props.maxValue}
            minValue={props.minValue}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        wrap="nowrap"
        justify="space-between"
      >
        <Grid item>
          <Typography>{props.text}</Typography>
        </Grid>
        <Grid item>{renderControlElement(props)}</Grid>
      </Grid>
    </>
  );
}

export default SettingsElement;
