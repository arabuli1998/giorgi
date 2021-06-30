import React,{useEffect,useState} from 'react';
import "./Style.css"
import captureImg from './Capture.jpg';
import Clock from "./Clock";

const Temp = () => {
    const [city,setCity]=useState("tbilisi");
    const[search,setSearch]=useState("tbilisi");

    useEffect(() => {
        const fetchApi=async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=519e66b573742455720bff3c650fbe1d`;
            const res=await fetch(url);
            const resJson=await res.json();
            
           setCity(resJson.main);
        };
      fetchApi();
    },[search])
    return (
        <>
       <div className="box">
       <img src={captureImg} alt=""/>
       </div>
            <div className="box1">
            
            

                <input type="search" placeholder="input city name" className="input" value={search}  
                onChange={(event)=>{setSearch(event.target.value) } }/>
            
           {!city ?(
               <p>{search} is not city name</p>
           ):(
            <div>
            <div className="info"><ul>
                
                <li><h1><i className="fas fa-street-view"></i>{search}</h1></li>
                <li><h1>Temperature: <strong>{city.temp}</strong>°</h1></li>
                <li> <h1 className="tempv">Pressure: <strong>{city.pressure}</strong></h1></li>
                <li><h3 className="minmax">MIN//MAX : &nbsp;<strong>{city.temp_min}</strong>°&nbsp;// &nbsp;<strong>{city.temp_max}</strong>°&nbsp;cel </h3></li>
                <li><h3>humidity: <strong>{city.humidity}</strong></h3></li>
                <li><Clock/></li>
            </ul>
                

                    </div>
                   
                   </div>
                  
           )
           }
            
  
            </div>
      
        
        
        </>
    )
}


export default Temp
