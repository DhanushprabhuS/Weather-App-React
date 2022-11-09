import React , {useEffect,useState} from 'react';
import FunAxios from './FunAxios';
import './Style/Input.css';
const Input = () => {
    const [locationIn,setLocationIn] = useState('');
    const [isTyped, setisTyped] = useState(false);
    const [sty,setSty] = useState({});
    
    useEffect(
        ()=>{
            if( window.innerWidth <= 850)
            {
                if(!isTyped){
                    setSty({"margin-top": "100px"})
                }
    
                if(isTyped){
                    setSty({"margin-top": "800px"})
                }
            }
            
        }
    ,[isTyped])
    return (
        <>
        
        <div className='app-warp'>
            <div>
                <header style={sty}>
                    <label>
                        <input type="text" className='search-box'
                        placeholder= 'Search for a city...'
                        value={locationIn} 
                        onChange={(e)=>{
                            setLocationIn(e.target.value);   
                        }}

                        onKeyPress={
                            (e)=>{
                                if(e.key === 'Enter')setisTyped(true);
                            }
                        }

                        onBlur = {
                            (prev)=>setisTyped(true)
                        }

                        onEnter

                        onFocus = {
                            (prev)=>setisTyped(false)
                        }

                        />
                    </label>
                    
                   
                </header>
                
            </div>
            {
                isTyped && locationIn!=""?
                <div className='results'>
                    <FunAxios location={locationIn} />
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
