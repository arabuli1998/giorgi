import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { FormControl,Box,OutlinedInput,InputAdornment,} from '@material-ui/core';
import { FormControlLabel,RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
margin:{
    flexDirection:'row',
    display:'flex',
    
},
box:{
    marginTop:'30px',
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    minHeight:'300px',
    justifyContent:'space-between',
    color:'gray'
},
input:{
    flexGrow:'1',
    width:'100%'
},
h5:{
    fontSize:'22px',
    color:'black',
},
gio:{
  display:'flex',
  flexDirection:'column'
},
title:{
  color:'black'
},
titlee:{
    display:'flex',
    flexDirection:'column',
    minHeight:'250px',
    justifyContent:'space-around'
},
minmax:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    justifyContent:'space-between'
},
input:{
    width: '50%',
    height: '35px',
    flex:'1 2 100px',
    marginTop:'15px'
}


}),
);

const Cards=()=>{
  const classes = useStyles();
  const data={
    each:[
      {name:"Under $25"},
      {name:"$25 to $50"},
      {name:"$50 to $100"},
      {name:"$100 to $200"},
      {name:"$200 & above"},
    ]
    };
  return (
  
   
<Box className={classes.box}>
    
        
        <FormControl component="fieldset" >
        <RadioGroup row aria-label="position" name="position" defaultValue="top"  className={classes.titlee}>
        <h5 className={classes.title}>Price</h5>
        {data.each.map((elem)=>(
        <FormControlLabel
          value= {`${elem.name}`}
          control={<Radio color="primary" size="small"/>}
          label={`${elem.name}`}
          labelPlacement={`${elem.image}`}
        />
        ))}
      </RadioGroup>
        </FormControl>
        <div className={classes.minmax}>
            <OutlinedInput className={classes.input }
            id="outlined-adornment-amount"
            placeholder="Min"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          
          <OutlinedInput className={classes.input }
             id="outlined-adornment-amount"
             placeholder="Max"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
     </div>
</Box>

  )}
  export default Cards;