import React from 'react';
import { IconButton, makeStyles,Toolbar } from "@material-ui/core";
import {Button} from '@material-ui/core';
import { AppBar } from "@material-ui/core";
import { Container } from '@material-ui/core';
import { display, sizing} from '@material-ui/system';
import { color } from '@material-ui/core';
import Image from './Capture.jpg'
const useStyles=makeStyles((theme)=>({
    appba:{
        minHeight:'40vh',
        backgroundImage:`url(${Image})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        display: 'flex',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        color: '#fff',
    
    },
    h1:{
fontWeight:'bold',
zIndex:'1',


    },
    font:{
      
       
       position:'absolute',
       backgroundColor:'rgba(0,0,0,0.5)',
       minWidth:'100%',
       minHeight:'40%',
       
    },
    div:{
        zIndex:2,
    }
}));


export default function Main(){
    const classes=useStyles();
    return(
        <Container maxWidth="fluid" className={classes.appba} height={400}>
           
           <div className={classes.div}><h1 className={classes.h1}>Shop</h1>
         
           </div>
           <div className={classes.font}></div>
        </Container>
)

}