import React, {useState,useEffect} from 'react';


const Condition = ({data}) => {

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


    return (
        <div>
            <h3 style={{"float":"right",'color':'yellow'}}>{
            months[( new Date(data.datetime)).getMonth()]+" "+(new Date(data.datetime)).getDate()
            + " , " + weekday[(new Date(data.datetime)).getDay()]
            
            }
            </h3>
            <h2>
            <img height={70} width={70} src={'./icons/'+data.icon+'.png'} style={{"margin":"10px"}}/>
            <span style={{'font-size':'130%'}}>
                {data.conditions}
            </span>
            </h2>
            <br/>
            <h4>
            {data.description}
            </h4>
            <span style={{'font-size':'130%'}}>
                {((data.temp-32)*(5/9)).toFixed(1)}
            </span>
            <img height={30} width={30} src='./icons/celsius.png' style={{"margin":"5px"}}/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
            <span style={{'font-size':'130%'}}>
            {data.humidity}
            </span>
            <img height={30} width={30} src='./icons/humidity.png' style={{"margin":"5px"}}/>
            
        </div>
    );
}

export default Condition;
