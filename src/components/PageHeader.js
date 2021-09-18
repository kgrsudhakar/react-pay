import React from 'react';
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(0),
    display: 'flex',
    marginBottom: theme.spacing(0),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(0),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: 'theme.spacing(0)',
    marginLeft: '-20px',
    '& .MuiTypography-subtitle2': {
      opacity: '0.4',
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} className={classes.root}>
      {/* <div className={classes.pageHeader}> */}
      {/* <Card className={classes.pageIcon}>{icon}</Card> */}
      <div className={classes.pageTitle}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        {/* </div> */}
      </div>
    </Paper>
  );
}
