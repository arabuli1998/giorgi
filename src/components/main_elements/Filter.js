import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { FormControl,Box,OutlinedInput,InputAdornment,Button} from '@material-ui/core';
import { FormGroup,FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';


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
    minHeight:'330px',
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
}


}),
);

const Cards=()=>{
  const classes = useStyles();
  const data={
    each:[
      {name:"New"},
      {name:"Used"},
      {name:"Collectible"},
      {name:"Reneved"},
      {name:"disabled"},
    ]
    };
  return (
  
   
<Box className={classes.box}>
    <h5 className={classes.h5}>Filters</h5>
       <FormControl fullWidth className={classes.margin} variant="outlined" size='small' >
            <OutlinedInput className={classes.input}
            id="outlined-adornment-amount" placeholder="search..."
            startAdornment={<InputAdornment position="start"  ></InputAdornment>}
          />
          <Button><i className="fas fa-search"></i></Button>
        </FormControl>
        
        <FormControl component="fieldset" >
        <FormGroup aria-label="position" column  >
        <h5 className={classes.title}>Condition</h5>
        {data.each.map((elem)=>(
        <FormControlLabel
          value= {`${elem.name}`}
          control={<Checkbox color="primary" size="small" />}
          label={`${elem.name}`}
          labelPlacement={`${elem.image}`}
        />
        ))}
      </FormGroup>
        </FormControl>
</Box>

  )}
  export default Cards;