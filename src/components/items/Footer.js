import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
root:{
  display:'flex',
  justifyContent:'center',
  backgroundColor:'#1565c0',
  color:'white'
},
grid:{
  width:'100%',
  display: 'flex',
  justifyContent:'space-between',
  flexWrap:'wrap',
  minHeight:'70px',
  alignItems:'center'
},
box:{
  width:'20%',
  justifyContent:'space-between',
  display:'flex',
  alignItems:'center'
},
h5:{
  fontSize:'16px'
}
}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   
<Grid container spacing={0}  className={classes.root}>
          
 <Grid item lg={8} md={10} sm={12}  className={classes.grid}>
            <h5 className={classes.h5}>Get connected with us on social networks!</h5>
    <Box className={classes.box}>
      <i className="fab fa-facebook-f">
       </i><i className="fab fa-twitter">
         </i><i className="far fa-envelope">
           </i><i className="fab fa-invision"></i>
           <i className="fab fa-instagram"></i>
   </Box>
        </Grid>
        
 </Grid>

  )}