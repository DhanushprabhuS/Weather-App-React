import React , {useState,useEffect} from 'react';
import './Style/Weather.css';
import MiniBox from './MiniBox';
const Weather = (props) => {
    const [days,setDays] = useState([...props.daysData]);
    const [dataC,setDataC] = useState();

    function updateData(data){
        console.log("updated!")
        setDataC(data);
        props.UpdateMainParent(data)
    }
    return (
        <div>
            <br/>
            <div className='singleBar'>
                {
                    days.map((day)=>{
                        return (
                            <MiniBox data={day} updateParent={updateData}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Weather;
