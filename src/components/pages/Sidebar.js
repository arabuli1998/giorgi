import React from 'react';

import { Grid } from '@material-ui/core';
import sidebar from '../styles/sidebar.css'
import { Link } from 'react-router-dom'






export default function Sidebar() {
  
  return(
  
    <Grid item xs={12} className="grid">
      <nav class="nav">
       
        
        <h2 className="h2">LVL<h1>X</h1></h2>
         <input type="checkbox" id="check"/>
    <ul className="ul">
      <li className="li"><Link to="/Products" className="link">Products</Link></li>
      <li className="li"><Link to="/Mai" className="link">Users</Link></li>
          <li className="li"><Link to="/"  className="link">Categories</Link></li>
          
        </ul>
         <label for="check"><i class="fas fa-bars" id="label"></i></label>
      </nav>
     
   </Grid>
 

  

 

  
 
  )
}
