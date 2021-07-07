import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    number:{
      display:'flex',
      width:'100%',
      justifyContent:'space-between'
     
    },
    first:{
      display:'flex',
      flexDirection:'column'
    },
    firstdiv:{
      display:'flex',
      flexDirection:'column',
      minHeight: '200px',
      justifyContent:'space-between'
    },
    a:{
      textDecoration:'none',
      color:'black',
      fontSize:'13px'
    },

    second:{
      display:'flex',
      flexDirection:'column',
      minHeight:'1200px',
      justifyContent:'space-around'
    },

    seconddiv:{
      width: '100%',
      display: 'flex',
      justifyContent:'center'
    },

    fivediv:{
     display: 'flex',
    flexDirection:'column',
    minHeight:'300px',
    justifyContent:'space-between'
    },

    h4:{
      fontSize:'22px'
    },

    h5:{
      fontSize:'18px'
    },

    
    filter:{
      display:'flex',
      flexDirection:'column',
      minHeight:'100px',
      justifyContent:'space-between'
    },

    condition:{
      display:'flex',
      flexDirection:'column'
    },

    fivetwodiv:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
button:{
  borderRadius:'50%',
  width:"30px",
  height:'30px',
 border:'2px solid gray'
},
buttondiv:{
  display:'flex',
  justifyContent:'space-between'
},
color:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  minHeight:'120px'
}
  }),
);

export default function Secondbar() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}  className={classes.root} >


       <grid item xs={12} className={classes.first}>
       <h4 className={classes.h4}>Subcategories</h4>

<div className={classes.firstdiv}>
<a  className={classes.a} href="#">RETURN TO CLOTHING, SHOES, ACCESSORIES</a>
 <a  className={classes.a} href="#">DRESSES</a>
  <a  className={classes.a}  href="#">TOPS, TEES & BLOUSES</a>
  <a  className={classes.a} href="#">SWEATERS</a>
  <a   className={classes.a}href="#">FASHION HOODIES & SWEATSHIRTS</a>
  <a className={classes.a} href="#">JEANS</a>
  </div>
         </grid>   
    

         <Grid item xs={12} className={classes.second}>


         <div className={classes.filter}>
  <h4 className={classes.h4}>Filters</h4>
  <div className={classes.seconddiv}>
  <TextField style={{flexGrow:'1'}}
          id="outlined-margin-dense"
          defaultValue="search..."
          className={classes.textField}
         placeholder="search..."
          margin="dense"
          variant="outlined"
        />
        <Button>
          <i class="fas fa-search"></i>
          </Button>
          </div>
 </div>
  



  <div className={classes.condition}>
<h5 className={classes.h5}>Condition</h5>
    <FormControlLabel
          value="NEW"
          control={<Checkbox color="primary" size="small"/>}
          label="NEW"
          labelPlacement="end"
        />

     <FormControlLabel
          value="USED"
          control={<Checkbox color="primary" size="small"/>}
          label="USED"
          labelPlacement="end"
        />

      <FormControlLabel
          value="COLLECTIBLE"
          control={<Checkbox color="primary" size="small"/>}
          label="COLLECTIBLE"
          labelPlacement="end"
        />

      <FormControlLabel
          value="RENEWED"
          control={<Checkbox color="primary" size="small"/>}
          label="RENEWED"
          labelPlacement="end"
        />
  </div>
  
  

 
  
 
    

<div className={classes.price}>
    <h5 className={classes.h5}>Price</h5>
  <RadioGroup column aria-label="position" name="position" defaultValue="top" >
    <FormControlLabel  value="under $25" control={<Radio color="primary" size="small"/>} label="under $25"  />
    <FormControlLabel value="25 to $50" control={<Radio color="primary" size="small" />} label="$25 to $50" />
    <FormControlLabel value="50 to $100" control={<Radio color="primary" size="small" />} label="$50 to $100" />
    <FormControlLabel value="100 to $200" control={<Radio color="primary" size="small" />} label="$100 to $200" />
    <FormControlLabel value="200 to above" control={<Radio color="primary" size="small" />} label="$200 & above" />
   </RadioGroup>
      
   <div className={classes.fivetwodiv}>
      <TextField style={{width:'45%'}}
          id="outlined-margin-dense"
          placeholder="$ MIN"
          className={classes.textField} 
          margin="dense"
          variant="outlined"
     /> 
        &nbsp;   -  &nbsp;
         <TextField style={{width:'45%'}}
        id="outlined-margin-dense"
        placeholder="$ MAX"
        className={classes.textField}
        margin="dense"
        variant="outlined"
      />
      </div>
</div>


<div className={classes.price2}>

    <h5 className={classes.h5}>Price</h5>

    <Slider classname={classes.slider}
        defaultValue={50}  
        aria-labelledby="discrete-slider-always"
        step={5}
        valueLabelDisplay="on"
      />
     <div className={classes.number}><p>$0</p> <p>$100</p></div>
</div>

<div className={classes.condition}>
<h5 className={classes.h5}>Size</h5>
<FormControlLabel
          value="34"
          control={<Checkbox color="primary" size="small"/>}
          label="34"
          labelPlacement="end"
        />

     <FormControlLabel
          value="36"
          control={<Checkbox color="primary" size="small"/>}
          label="36"
          labelPlacement="end"
        />

      <FormControlLabel
          value="38"
          control={<Checkbox color="primary" size="small"/>}
          label="38"
          labelPlacement="end"
        />

      <FormControlLabel
          value="40"
          control={<Checkbox color="primary" size="small"/>}
          label="40"
          labelPlacement="end"
        />
</div>


<div className={classes.color}>
<h5 className={classes.h5}>Color</h5>
<div className={classes.buttondiv}>
<button className={classes.button} style={{backgroundColor:"white"}} ></button>
<button className={classes.button} style={{backgroundColor:"gray"}} ></button>
<button className={classes.button} style={{backgroundColor:"green"}} ></button>
<button className={classes.button} style={{backgroundColor:"black"}} ></button>
<button className={classes.button} style={{backgroundColor:"blue"}} ></button>
<button className={classes.button} style={{backgroundColor:"yellow"}} ></button>
</div><div className={classes.buttondiv}>
<button className={classes.button} style={{backgroundColor:"red"}} ></button>
<button className={classes.button} style={{backgroundColor:"pink"}} ></button>
<button className={classes.button} style={{backgroundColor:"orange"}} ></button>
<button className={classes.button} style={{backgroundColor:"green"}} ></button>
</div>
</div>

</Grid>


  </Grid>
    
    
       
  );
}