import React from "react";
import TournamnetType from "../components/tournamentType/TournamentType";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import {tournamentInfo} from "../const/Tournamentdata";


function TournamentPreview(props) {
    const ttypes = tournamentInfo

    return (
      <>
        <NavBar
          leftSide="arrow"
          text="Wähle einen Spielmodus"
          rightSide="menu"
        />
        <Grid
          container
          direction="row"
          spacing={3}
          justify="center"
          alignContent="center"
        >
          {ttypes.map(
            (ttype, index) => (
              <TournamnetType
                key={index}
                tournamentType={ttype.tournamentType}
                name={ttype.name}
                src={ttype.src}
                linkTo={ttype.linkTo}
                infoText={ttype.infoText}
                teaserText={ttype.teaserText}
                pros={ttype.pros}
                cons={ttype.cons}
              />
            )
          )}
        </Grid>
      </>
    )
}

export default TournamentPreview;
