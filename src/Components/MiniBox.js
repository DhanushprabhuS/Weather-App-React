import React,{useRef,useState,useEffect} from 'react';
import './Style/Weather.css'

const MiniBox = (props) => {
    const [data,setData] = useState(props.data);
    const icon = './icons/'+data.icon+'.png';
    const ref = useRef(null);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const [month,setMonth] = useState('');
    const [date, setDate] = useState('');
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    function handelClick(){
        console.log("reached clicking - "+data.icon);
        props.updateParent(props.data);
    }
    console.log("In MiniBox Func - "+(new Date(data.datetime)).getMonth());
    useEffect(()=>{
        console.log("MiniBox --- "+( new Date(data.datetime)).getMonth());
        setMonth(months[( new Date(data.datetime)).getMonth()]);
        setDate(( new Date(data.datetime)).getDate());
    },[])

    
    return (
        <div id="mini" className='mini' onClick={handelClick}>
            <img height={50} width={50} src={icon} /> 
            <h3>
                {((data.temp-32)*(5/9)).toFixed(1)}&#176;C
            </h3>
            <hr size="1"/>
            <h4 style={{'color':'yellow'}}>{month} {date} , {weekday[(new Date(data.datetime)).getDay()]}</h4>
        </div>
    );
}

export default MiniBox;
