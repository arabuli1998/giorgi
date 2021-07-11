import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Products from '../main_elements/Products'

import Subcategories from '../main_elements/Subcategories'
import Filter from '../main_elements/Filter'
import Radio from '../main_elements/Radio'
import Slider from '../main_elements/Slider'
import Size from '../main_elements/Size'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'50px'
}
}),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
   

<Grid container spacing={5}  className={classes.root}>
          <Grid item lg={8} md={8}  sm={10} xs={12} className={classes.menu}>
          <Grid container spacing={2}  className={classes.roots}>
          <Grid item lg={4} md={4}  sm={9} xs={12} className={classes.menu}>
            <Subcategories/>
           < Filter/>
           < Radio />
           <Slider />
           <Size />
            </Grid>    
                 <Grid item lg={8} md={8} xs={12} className={classes.products}>
                     
            <Products />  
            </Grid>
                 
          </Grid>
          </Grid>
          </Grid>
  )}