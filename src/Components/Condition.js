import React, {useState,useEffect} from 'react';


const Condition = ({data}) => {

    return (
        <div>
            <h2>
            <img height={70} width={70} src={'./icons/'+data.icon+'.png'}/>
            <span style={{'font-size':'150%'}}>
                {data.conditions}
            </span>
            </h2>
            <h4>
            {data.description}
            </h4>
            <span style={{'font-size':'130%'}}>
                {((data.temp-32)*(5/9)).toFixed(1)}
            </span>
            <img height={30} width={30} src='./icons/celsius.png'/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
            <span style={{'font-size':'130%'}}>
            {data.humidity}
            </span>
            <img height={30} width={30} src='./icons/humidity.png'/>
        </div>
    );
}

export default Condition;
