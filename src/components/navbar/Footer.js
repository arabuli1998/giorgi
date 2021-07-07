import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
first:{
    backgroundColor:'red'
}

}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}  className={classes.root} >
        <grid item xs={12} className={classes.first}>
<h4>About me</h4>
bvb

        </grid>
        <grid item xs={12} className={classes.first}><p>dsd</p>sd</grid>
        <grid item xs={3} className={classes.first}>sf</grid>
        <grid item xs={3} className={classes.first}>sf</grid>

</Grid>
    
    
       
    );
  }