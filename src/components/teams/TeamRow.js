import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const maxPlayerSize = 3;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function TeamRow(data){
    const containerStyle = {
        padding: "16px",
        border: "3px solid #1BB55C",
        borderRadius: "8px",
        width: "100%",
        height: "20%"  
        
    }

    console.log(data.players.length);

    if(data.players.length === maxPlayerSize){
        containerStyle.border = "3px solid #1BB55C"
    }
    else if(data.players.length > 0 && data.players.length < maxPlayerSize){
        containerStyle.border = "3px solid #FFBB12"
    }
    else if(data.players.length === 0){
        containerStyle.border = "3px dashed #979797"
    }
    const classes = useStyles();

    var pl = [];


    

    data.players.forEach(element => { 
        console.log(element);
        pl.push(React.createElement(Avatar, {style: {height: '15%', width: '15%' }, src: element, alt: "PB"}));
    });
    if(pl.length === 0){
        pl.push(React.createElement(Avatar, {style: {height: '15%', width: '15%' }, src: "/userImages/addteam.png", alt: "PB"}));
    }

    let conta = React.createElement('div', {style: containerStyle, className: classes.root}, pl);
    return conta;

    //TODO make status setable
    //TODO Add text overlay to border
    /*
    return (
        <div style={containerStyle} className={classes.root}>
          
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"  className={classes.large} />
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"/>
                <Avatar style={{ height: '15%', width: '15%' }} src="/userImages/avatar.png" alt="PB"/>
          
        </div>
    )
    */
}

export default TeamRow;
