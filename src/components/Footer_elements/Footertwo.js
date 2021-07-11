import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
box:{
  width:'100%',
  backgroundColor:'#212121',
  height:'60px',
  color:'white',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignitems:'center',
  textAlign:'center'
},

}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   
<Grid container spacing={0}  className={classes.root}>
          
 <Grid item lg={7} md={10} sm={12}  className={classes.grid}>
   
          
        </Grid>
        <Box  className={classes.box}><p>© 2020 Copyright: MDBootstrap.com</p></Box>
 </Grid>

  )}