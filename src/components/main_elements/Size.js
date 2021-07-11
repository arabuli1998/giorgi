import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FormControl,Box} from '@material-ui/core';
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
    minHeight:'300px',
    justifyContent:'space-between',
    color:'gray'
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
      {name:32},
      {name:34},
      {name:36},
      {name:38},
      {name:40},
    ]
    };
  return (
  
   
<Box className={classes.box}>
        
        <FormControl component="fieldset" >
        <FormGroup aria-label="position" column  >
        <h5 className={classes.title}>Size</h5>
        {data.each.map((elem)=>(
        <FormControlLabel
          value= {`${elem.name}`}
          control={<Checkbox color="primary" size="small" />}
          label={`${elem.name}`}
          labelPlacement={`${elem.image}`}
        />
        ))}
      </FormGroup>
      <p>more</p>
        </FormControl>
        <h1>zura varskvlavebs (rating)-s ar aimportebs,</h1>
</Box>

  )}
  export default Cards;