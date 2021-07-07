
import React from 'react';
import './App.css';
import Thirdbar from "./components/navbar/Thirdbar"
import Radio from "./components/navbar/Radio"
import Secondbar from "./components/navbar/Secondbar"
import Nav from "./components/navbar/Nav"
import Main from "./components/navbar/Main"
import Footer from "./components/navbar/Footer"
import Menu from "./components/navbar/Menu"
import './App.css';
import { makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { Container,Grid,Paper } from '@material-ui/core';
const useStyles=makeStyles((theme)=>({
  paper:{
    width:'100%'
     
     
    
  },
  container:{
    display: 'flex',
    flexDirection:'column'
  },
  shops:{
    marginTop: '30px',
   border: 'none'
  },
  secondbar:{
    backgroundColor:'#1976d2',
    justifyContent:'center',
    display: 'flex',
    alignItems:'center',
    minHeight: '50px'
  },
  thirdbar:{
    backgroundColor:'#424242',
    justifyContent:'center',
    display: 'flex',
    alignItems:'center',
   
  },
  lastbar:{
    backgroundColor:'#212121',
    color:'white',
    minHeight: '50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  rot:{
    justifyContent:'center',
    minHeight:'50px'
  },
  footer:{
    justifyContent:'center',
    backgroundColor:'#424242'
  },
  gridtwo:{
  
  },
  divmain:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  divsecond:{
    marginBottom:'40px',
    width:'100%'
  }
 

}));


function App() {
  const classes=useStyles();
  return (
    <div className={classes.divmain}>
      <div className={classes.divsecond}>
    <Nav />
    <Main />
    </div>






 <Grid container spacing={6} xl={7} lg={8} md={10} sm={12} xs={12} className={classes.rot}>

        <Grid item xl={4} lg={4} md={4} sm={5} xs={12}>
<Menu />
        </Grid>
        



        <Grid item xl={8} lg={8} md={8}  sm={7} xs={12} className={classes.gridtwo}>
      <Radio />
        </Grid>
        




        
        

        


        </Grid>

        <Grid container spacing={0} xs={12} className={classes.rot}>
        <Grid xs={12}  className={classes.secondbar}>
          <Secondbar/>
        </Grid>
        </Grid>
        
        <Grid container spacing={0} xs={12} className={classes.footer}>
        <Grid xs={8}>
<Footer />
        </Grid> </Grid>

        <Grid container spacing={0} xs={12} className={classes.rot}>
        <Grid xs={12}  className={classes.lastbar}>
          <p>© 2020 Copyright: MDBootstrap.com</p>
        </Grid>
        </Grid>
        

     
      
      </div>
    
  )
}

export default App;
