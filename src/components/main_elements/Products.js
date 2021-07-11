import React,{useState} from 'react';
import { CardActionArea, CardMedia, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {CardHeader } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      header:{
          textAlign:'center',
      },
      box:{
          flexGrow:'1'
      },
      card:{
      marginTop:'20px',
      boxShadow:'1px 1px 4px #bdbdbd',
      borderRadius:'5px'
      },
      button:{
          fontSize:'22px',
         background:'none',
         color:'#616161',
          border: 'none',

      },
      row:{
          display:'flex',
          justifyContent:'space-between',
      }
}),
);
const Cards=()=>{
    const classes=useStyles();
    const data={
        each:[
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", title:"Black denim jacket", oldprice:'20.99', price:'$17.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", title:"Red hoodie sweater ", oldprice:'',price:'87.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", title:"Grey sweater", oldprice:'',price:'$36.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", title:"Black denim jacket", oldprice:'',price:'$17.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", title:"Black denim jacket", oldprice:'30.99',price:'$27.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", title:"Black denim jacket", oldprice:'',price:'$17.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", title:"Black denim jacket", oldprice:'',price:'$36.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", title:"Black denim jacket", oldprice:'21.99',price:'$17.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", title:"Black denim jacket", oldprice:'',price:'$19.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", title:"Black denim jacket", oldprice:'',price:'$35.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", title:"Black denim jacket", oldprice:'28.99',price:'$17.99'},
            {image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", title:"Black denim jacket", oldprice:'',price:'$99.99'},
        ]
       
    };
    const[Size,setSize]=useState(4);
    return(

        <Box className={classes.box}>
  <Box  className={classes.row}>
    <div>
        <button onClick={()=>setSize(4)} className={classes.button} size='small'>
            <i className="fas fa-th"></i>
            </button>
            <button className={classes.button} onClick={()=>setSize(6)}>
                <i className="fas fa-th-large"></i>
                </button>
            </div>
            <p>Label example</p>
            
            </Box>
    <Grid 
    container 
    spacing={3}
    >
        {data.each.map((elem)=>(
            <Grid item xl={Size} lg={Size} md={Size} sm={6} xs={12} kay={data.each.indexOf(elem)}>
                
                    
                        <CardActionArea>
                            <CardMedia className={classes.card}
                            component="img"
                            height="270"
                            image={`${elem.image}`}/>
                     <CardHeader className={classes.header}
                           title={`${elem.title}`}
                           
                           subheader={`${elem.oldprice}       ${elem.price}`} 
                        />
                        </CardActionArea>
                    
               
            </Grid>
        ))}
        </Grid>

        
  <Box  className={classes.row}>
    <div>
        <button onClick={()=>setSize(4)} className={classes.button} size='small'>
            <i className="fas fa-th"></i>
            </button>
            <button className={classes.button} onClick={()=>setSize(6)}>
                <i className="fas fa-th-large"></i>
                </button>
            </div>
            <p>Label example</p>
           
            </Box>
        </Box>
    );
};
export default Cards;