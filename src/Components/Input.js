import React , {useEffect,useState} from 'react';
import FunAxios from './FunAxios';
import './Style/Input.css';
const Input = () => {
    const [locationIn,setLocationIn] = useState('');
    const [isTyped, setisTyped] = useState(false);
    const [sty,setSty] = useState({});
    const [isNotFound,setIsNotFound] = useState(true);
    
    
    useEffect(
        ()=>{
            if( window.innerWidth <= 850)
            {
                if(!isTyped){
                    console.log("not view ")
                    setSty({"margin-top": "150px"});
                }

                if(isNotFound){
                    console.log('view reached - style')
                    setSty({"margin-top": "150px"});
                    console.log("view - 150px")
                }
                else {
                    if(isTyped ){
                        setSty({"margin-top": "1000px"});
                        console.log("view - 1000px")
                    }
                }
                
            }
            
        }
    ,[isTyped],[isNotFound])
    
    function handleIsNotFound(val){
        console.log("Parent update not fount - "+val)
        setIsNotFound(val);
    }

    return (
        <>
        
        <div className='app-warp'>
            <div>
                <header style={sty}>
                    <label>
                        <input type="text" className='search-box'
                        placeholder= 'Search for a city...'
                        value={locationIn} 
                        onChange={
                            (e)=>{
                            setLocationIn(e.target.value);
                            setIsNotFound(false);
                        }
                        
                    }

                        onKeyPress={
                            (e)=>{
                                if(e.key === 'Enter')setisTyped(true);
                                setIsNotFound(false);
                            }
                        }

                        onBlur = {
                            
                            (prev)=>{
                                if(locationIn != "")setisTyped(true);
                                setIsNotFound(false);
                            }
                        }

                        onEnter

                        onFocus = {
                            (prev)=>{setisTyped(false); setIsNotFound(false);}
                        }

                        />
                    </label>
                    
                   
                </header>
                
            </div>
            {
                isTyped && locationIn!=""?
                <div className='results'>
                    <FunAxios location={locationIn} updateIsNotFound={handleIsNotFound}/>
                </div>
            :
            <h2>
                Search for a location!
            </h2>
            }
            
        </div>
        </>
    );
}

export default Input;
