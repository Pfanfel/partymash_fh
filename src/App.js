import React from "react";
import Home from "./pages/Home";
import TournamentOverview from "./pages/TournamentOverview";
import Teams from "./pages/Teams";
import CurrentGame from "./pages/CurrentGame";
import CreateRoundTournament from "./pages/CreateRoundTournament";
import CreateKnockoutTournament from "./pages/CreateKnockoutTournament";
import TournamentPreview from "./pages/TournamentPreview";
import EnterResult from "./pages/EnterResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalSettings from "./pages/GlobalSettings";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: "#0E4DA4",
        background: "#0E4DA4",
      },
      secondary: {
        main: "#1BB55C",
        contrastText: "#fff",
      },
      selected: {
        background: "#0E4DA4",
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif", "Roboto"].join(","),
      button: {
        fontSize: "1.2rem",
        fontWeight: "600",
      },
      h1: {
        fontSize: "1.4rem",
        fontWeight: "600",
      },
      body1: {
        fontWeight: "400",
        fontSize: "1.1rem",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 15,
        },
      },
      MuiFab: {
        sizeSmall: {
          maxHeight: "30px",
          minHeight: "30px",
          minWidth: "30px",
          maxWidth: "30px",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/globalSettings"
              render={(props) => (
                <GlobalSettings
                  {...props}
                  checked={darkState}
                  onChange={handleThemeChange}
                />
              )}
            />
            <Route path="/tournamentOverview" component={TournamentOverview} />
            <Route path="/teams" component={Teams} />
            <Route path="/tournamentPreview" component={TournamentPreview} />
            <Route path="/enterResult" component={EnterResult} />
            <Route
              path="/createRoundTournament"
              component={CreateRoundTournament}
            />
            <Route
              path="/createKnockoutTournament"
              component={CreateKnockoutTournament}
            />
            <Route path="/overview" component={TournamentOverview} />
            <Route path="/currentGame" component={CurrentGame} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
