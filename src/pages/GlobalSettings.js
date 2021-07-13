import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

function GlobalSettings(props) {
  return (
    <div>
      <NavBar leftSide="arrow" text="Party Mash" logo={true} />
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
          <Grid
            style={{ marginTop: 16, marginBottom: 16 }}
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            spacing={6}
          >
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                wrap="nowrap"
                justify="space-between"
              >
                <Grid item>
                  <Typography>Dark Mode</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={props.checked}
                    onChange={props.onChange}
                    color="primary"
                    name="Dark-Mode"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GlobalSettings;
