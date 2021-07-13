import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import logo from "../images/partymash_logo_small.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  middleNavBar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    display: "block",
    width: "24px",
    height: "24px",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  let history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderLeftNavBar(param) {
    switch (param) {
      case "arrow":
        return (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIosIcon />
          </IconButton>
        );
      case "avatar":
        return (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Avatar alt="PB" className={classes.small}></Avatar>
          </IconButton>
        );
      default:
        return null;
    }
  }

  function renderMenuItem(item) {
    switch (item.type) {
      case "link":
        return (
          <MenuItem component={Link} to={item.path} onClick={handleClose}>
            {item.name}
          </MenuItem>
        );
      case "modal":
        return (
          <MenuItem
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.name}
          </MenuItem>
        );
      default:
        return null;
    }
  }

  function renderRightNavBar(props) {
    switch (props.rightSide) {
      case "info":
        return (
          <IconButton
            edge="end"
            color="inherit"
            component={Link}
            onClick={props.rightSideOnClick ? props.rightSideOnClick : null}
          >
            <InfoOutlinedIcon />
          </IconButton>
        );
      case "menu":
        return (
          <>
            <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                component={Link}
                to="/globalSettings"
                onClick={handleClose}
              >
                Einstellungen
              </MenuItem>
              {props.menuItems &&
                props.menuItems.map((item) => renderMenuItem(item))}
            </Menu>
          </>
        );
      default:
        return null;
    }
  }

  function renderMiddleNavBar(props) {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        wrap="nowrap"
        justify="space-between"
      >
        <div className={classes.middleNavBar}>
          {props.logo && (
            <Grid item>
              <Box mr={2}>
                <img src={logo} alt="logo" className={classes.logo} />
              </Box>
            </Grid>
          )}
          {props.text && (
            <Grid item>
              <Typography noWrap={true} variant="h1" align="center">
                {props.text}
              </Typography>
            </Grid>
          )}
        </div>
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {renderLeftNavBar(props.leftSide)}
          {renderMiddleNavBar(props)}
          {renderRightNavBar(props)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
