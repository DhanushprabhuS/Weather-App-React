import React , {useState,useEffect} from 'react';
import axios from "axios";
import Weather from './Weather';
import './Style/Weather.css';
import Time12 from './Time12';
import Condition from './Condition';



const key = "6KB5JHRJQT89VJL2MXTEZCYGJ";
const FunAxios = React.memo( (props) => {

    const[data,setData] = useState([]);
    const[isLoaded,setIsLoaded] = useState(false);
    const[date,setDate] = useState('');
    const[date7,setDate7] = useState('');
    const[location,setLocation] = useState(props.location);
    const[days,setDays] = useState([]);
    const[clicked,setClicked] = useState(false);



    const fixDate = () => {
        let today = new Date();
        const todayFormatted = today.getFullYear()+'-'+parseInt(today.getMonth()+1)+'-'+today.getDate();
        console.log("TODAY : "+todayFormatted);


        today.setDate(today.getDate()+7);


        const date7Formatted = today.getFullYear()+'-'+parseInt(today.getMonth()+1)+'-'+today.getDate();
        setDate(todayFormatted);
        setDate7(date7Formatted);
    }




    useEffect(
    ()=>
    {
        console.log("Initial useEffect - []")
        fixDate();
        if(date!=="" && date7!=="")
        {
            console.log("get : ");
            console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/salem/${date}/${date7}?key=${key}`)

            axios
                .get(
                        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}/${date7}?key=${key}`)
                .then(
                        (response)=>{
                                console.log(response);
                                setData(response.data);
                                setIsLoaded(true);
                                setDays(response.data.days);
                                console.log("Days : "+response.data.days)
                            })
                .catch(
                        (error)=>{
                            console.log("ErrOr : occured getting"+error);
                            setIsLoaded(false);
                        })
        }
    }, [date,date7,location]);


    const [iDay,setIDay] = useState(days);

    const updateData=(data)=>{
        setIDay(data);
        setClicked(true);
    }


    if(!isLoaded)
    {
        return (
            <h2>
                LOADING...!
            </h2>
        )
    }




    return (
        <>
            <div className='miniBoxHolder'>
                <h3>
                    <Time12/>
                    {data.resolvedAddress}
                </h3>
                <Weather 
                    daysData={days}
                    address={data.resolvedAddress}
                    condition = {data.description}
                    UpdateMainParent = {updateData}
                />
                {
                    clicked?
                        <div className='header  conditionBox'>
                            <Condition data={iDay}/>
                        </div>
                    :
                    null
                }
            </div>
        </>
    );
}
);

export default FunAxios;
