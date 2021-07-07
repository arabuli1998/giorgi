import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
     
     
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

export default function Secondbar() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} lg={9} xl={9} md={10} sm={10} xs={11} className={classes.root}>
          
    <Grid item lg={8} md={7} sm={12}  xs={12} className={classes.shops}><h5 className={classes.h5}>Get connected with us on social networks!</h5>
  
  </Grid>
  <Grid item lg={4} md={5}  sm={7} xs={9} className={classes.shop}><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i><i class="far fa-envelope"></i><i class="fab fa-invision"></i><i class="fab fa-instagram"></i>
  
  </Grid>
  
  </Grid>
    
    
       
  );
}