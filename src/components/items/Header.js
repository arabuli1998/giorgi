import React,{useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
h1:{
  fontSize:'25px',
  color:'white',
  fontWeight:'700'
},
header:{
  width:'100%',
  display:'flex',
  zIndex:'2',
  justifyContent:'space-between',
  alignItems:'center',
  position: 'fixed',
  minHeight:'70px',
  backgroundColor:'rgba(199, 199, 199, 0.1)',
  boxShadow:'1px 1px 2px black',

},
headertwo:{
  width:'100%',
  display:'flex',
  zIndex:'2',
  justifyContent:'space-between',
  alignItems:'center',
  position: 'fixed',
  minHeight:'70px',
  background:'black',
  boxShadow:'1px 1px 2px black',
  color:'black'
},
ul:{
  marginTop:'13px',
  display:'flex',
  flexDirection:'row',
  color:'white',
  justifyContent:'space-around',
  width:'29%',
  listStyle:'none',
  height:'30px'
  
},
li:{
  display:'flex'
},
p:{
  border:'1px solid white',
  borderRadius:'15px',
  width:'70px',
  height:'30px',
  textAlign:'center'
},
news:{
  color:'white',
  width:'24px',
  height:'22px',
  borderRadius:'50%',
  background:'red',
  textAlign:'center'
},

}),
);

export default function Secondbar() {
  const classes = useStyles();
const[heade,setHeade]=useState('header');


const change=()=>{
  if(window.scrollY>=100){
    setHeade('header');
    
  }else{
    setHeade('classes.headertwo');
  }
};
window.addEventListener('scroll',change);
  return (
   


<Box className={classes.header}>
<h1 className={classes.h1}>MBD</h1>
  <ul className={classes.ul}>
    <li className={classes.li}>
      <p className={classes.news}>
        1</p>
        <h5>
          <i className="fas fa-shopping-cart"></i>
          </h5>
          </li>
    <li><p>Flag</p></li>
    <li><p>shop</p></li>
    <li><p>Contact</p></li>
    <li><p>Sign in</p></li>
    <li className={classes.li}><p className={classes.p}>Sign up</p></li>
  </ul>
 
</Box>



  )}