import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function buildNotification(count, mode) {

  if (count > 0) {
    return <Alert
      variant="filled"
      severity="warning"
    >
      {`In ${count} Spielen bist du dran!`}
    </Alert>
  }
  else {
    return < Alert
      variant="filled"
      severity="success"
      component={Link}
      to={{ pathname: "/currentGame", mode: mode }}
      action={
        <ArrowForwardIcon />
      }
    >
      {`Spiel beitreten!`}
    </Alert >
  }
}

function NextGameNotice({ nextGameNotice, settings }) {
  return (
    buildNotification(nextGameNotice.count, settings.mode)
  );
}

export default NextGameNotice;
