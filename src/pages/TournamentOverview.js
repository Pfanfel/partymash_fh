import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import GridOn from "@material-ui/icons/GridOn";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Games from "../components/overview/Games";
import TournamentTable from "../components/overview/TournamentTable";
import TournamentTree from "../components/overview/TournamentTree";
import Ranking from "../components/overview/Ranking";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const testGames = [
  {
    "p1": "Team 1",
    "p2": "Team 2",
    "running": true
  },
  {
    "p1": "Team 3",
    "p2": "Team 4",
    "running": true
  },
  {
    "p1": "Team 5",
    "p2": "Team 6",
    "running": true
  },
  {
    "p1": "Team 7",
    "p2": "Team 8",
    "running": false
  },
  {
    "p1": "Team 9",
    "p2": "Team 10",
    "running": false
  },
  {
    "p1": "Team 11",
    "p2": "Team 12",
    "running": false
  },
];

const testStandings = [
  {
    "name": "Team 1",
    "points": 0,
  },
  {
    "name": "Team 2",
    "points": 0,
  },
  {
    "name": "Team 3",
    "points": 0,
  },
  {
    "name": "Team 4",
    "points": 0,
  },
  {
    "name": "Team 5",
    "points": 0,
  },
  {
    "name": "Team 6",
    "points": 0,
  },
  {
    "name": "Team 7",
    "points": 0,
  },
  {
    "name": "Team 8",
    "points": 0,
  },
  {
    "name": "Team 9",
    "points": 0,
  },
  {
    "name": "Team 10",
    "points": 0,
  },
  {
    "name": "Team 11",
    "points": 0,
  },
  {
    "name": "Team 12",
    "points": 0,
  },
];

const testNextGameNotice = {
  "type": "NextGameNotice",
  "count": 5,
};


function TournamentOverview(props) {

  const testSettings = {
    "mode": props.location.mode,
    "userTeam": "Team 9"
  };

  const classes = useStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  const [games, setGames] = React.useState(testGames);

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const [nextGameNotice, setNextGameNotice] = React.useState(testNextGameNotice);

  React.useEffect(() => {
    if (nextGameNotice.count > 0) {
      setTimeout(() => {
        setNextGameNotice({ "type": "NextGameNotice", "count": nextGameNotice.count - 1 });
      }, 1000);
    }
  });

  return (
    <>
      <NavBar logo={true} text="#45583" rightSide="menu" />
      <Paper square className={classes.root}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<VideogameAsset />} label="Spiele" />
          {testSettings.mode === "K.O." ? <Tab icon={<AccountTreeIcon />} label="Baum" /> : <Tab icon={<GridOn />} label="Tabelle" />}
          <Tab icon={<FormatListNumbered />} label="Rangliste" />
        </Tabs>
      </Paper>
      {tabIndex === 0 ?
        <Games games={games} nextGameNotice={nextGameNotice} settings={testSettings} /> : tabIndex === 1 ?
          testSettings.mode === "K.O." ?
            <TournamentTree /> : <TournamentTable standings={testStandings} /> : <Ranking ranking={testStandings} settings={testSettings} />}
    </>
  );
}

export default TournamentOverview;
