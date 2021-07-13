import React from "react";
import TeamRow from "../components/teams/TeamRow";
import NavBar from "../components/NavBar";
import BottomDrawer from "../components/drawer/BottomDrawer";
import { makeStyles } from "@material-ui/core/styles";
import QROverlay from "../components/QROverlay";

function Teams(props) {
  const [modalVisible, setModal] = React.useState(true);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const pageStyle = {
    position: "relative",
    padding: "20px",
    height: "100%",
  };
  const rowStyle = {
    paddingBottom: "20px",
  };

  const fullTeam = [
    "/userImages/avatar4.jpg",
    "/userImages/avatar5.jpg",
    "/userImages/avatar6.jpg",
  ];

  const notFullTeam = ["/userImages/avatar7.jpg", "/userImages/avatar8.jpg"];
  const emptyTeam = [];

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <NavBar
        leftSide="arrow"
        logo={true}
        text="#45583"
        rightSide="menu"
        menuItems={[{ type: "modal", name: "Teilen", onClick: handleOpen }]}
      />
      <div style={pageStyle}>
        <div style={rowStyle}>
          <TeamRow players={emptyTeam}></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow players={notFullTeam}></TeamRow>
        </div>
        <div style={rowStyle}>
          <TeamRow players={fullTeam}></TeamRow>
        </div>
      </div>
      <BottomDrawer open={handleOpen}></BottomDrawer>
      <QROverlay
        className={classes.modal}
        open={modalVisible}
        close={handleClose}
        mode={props.location.mode}
      ></QROverlay>
    </>
  );
}

export default Teams;
