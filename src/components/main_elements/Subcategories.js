import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
ul:{
    listStyle:'none',
    fontSize:'13px',
    minHeight:'250px',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'column'
},
box:{
    display: 'flex',
    flexDirection:'column',
    minHeight:'290px',
    justifyContent:'space-between',
    
},
h5:{
    fontSize:'22px'
}
}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   
<Box className={classes.box}>
    <h5 className={classes.h5}>Subcategories</h5>
    <ul className={classes.ul}>
        <li>RETURN TO CLOTHING, SHOES, ACCESSORIES</li>
        <li>DRESSES</li>
        <li>TOPS, TEES & BLOUSES</li>
        <li>SWEATERS</li>
        <li>FASHION HOODIES & SWEATSHIRTS</li>
        <li>JEANS</li>
        
    </ul>
</Box>

  )}