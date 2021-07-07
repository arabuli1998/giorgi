import React from 'react';
import { IconButton, makeStyles,Toolbar } from "@material-ui/core";
import {Button} from '@material-ui/core';
import { AppBar } from "@material-ui/core";
import { Container } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    appbar:{
        flexGrow:1,
        color:'black'
    },
    app:{
        background: 'rgba(123,123,134,0.5',
        
    }
  
}));

export default function Nav(){
    const classes=useStyles();
    return(
        <div>
            <AppBar elevation={0} className={classes.app}>
                <Toolbar>
                    <h1  className={classes.appbar}>MDB</h1>
                <IconButton>rs</IconButton>
                </Toolbar>
            </AppBar>
            
            </div>
)

}