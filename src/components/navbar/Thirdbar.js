import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
     flexWrap:'wrap',
     height:'auto',
      textAlign:'center',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      color: 'white'
    },
    shops:{
      textAlign:'start',
     
    },
    shop:{
      textAlign:'center',
     display: 'flex',
     justifyContent:'center',
     
     justifyContent:'space-evenly'
    },
    h5:{
      fontSize:'15px'
    }
  }),
);

export default function Thirdbar() {
  const classes = useStyles();

  return (
    <Grid container spacing={9} lg={9} xl={9} md={10} sm={10} xs={11} className={classes.root}>
          
    <Grid item l xs={3} className={classes.shops}>
  <div><h5>About me</h5>
  <p>
Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>
  </Grid>
  <Grid item l xs={3} className={classes.shops}>
  <div><h5>Products</h5>
  <p>
Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>
  </Grid>
  <Grid item l xs={3} className={classes.shops}>
  <div><h5>Useful links</h5>
  <p>
Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>
  </Grid>
  <Grid item l xs={3} className={classes.shops}>
  <div><h5>Contacts</h5>
  <p>
Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>
  </Grid>
  
  </Grid>
    
    
       
  );
}