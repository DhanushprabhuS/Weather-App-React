import React, {useState,useEffect} from 'react';

const Time12 = () => {
    const [date,setTime] = useState(new Date());
    const [displayTime,setDisplayTime] = useState('');
    useEffect(
        ()=>{
            const timer = setInterval(
                ()=>{
                    setTime(new Date());
                },
                1000
            );
        
            let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
            let am_pm = date.getHours() >= 12 ? "PM" : "AM";
            hours = hours < 10 ? "0" + hours : hours;
            let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            let time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
            setDisplayTime(time);



            return()=>{
                clearInterval(timer);
            };
        },
        [date]
    );

    
    return (
        <div>
           {displayTime}
        </div>
    );
}

export default Time12;
