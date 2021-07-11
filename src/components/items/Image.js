import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Image from './panorama.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
box:{
    width:'100%',
    height:'400px',
    backgroundImage:`url(${Image})`,
    
    
},
box1:{
    zIndex:'1',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
    color:'white',
}
}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   
<Box className={classes.box}>
    <Box className={classes.box1}><h1>Shop</h1></Box>
    
</Box>

  )}