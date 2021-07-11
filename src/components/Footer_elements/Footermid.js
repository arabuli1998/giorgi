import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
root:{
    backgroundColor:'#424242',
    display: 'flex',
    justifyContent:'center',
    color:'white',
    minHeight:'270px',
    alignItems:'center'
}
}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   
<Grid container spacing={0}  className={classes.root}>        
    <Grid item lg={8} md={10} sm={12}  className={classes.grid}>
       <Grid container spacing={0}>
           <Grid item lg={3} md={10} sm={12}  className={classes.grid}>
               <h5>About me</h5>
                 <p>Here you can use rows and columns to
                    organize your footer content. Lorem 
                    ipsum dolor sit amet, consectetur 
                    adipisicing elit.</p>
          </Grid>
       </Grid>
     </Grid>     
 </Grid>

  )}