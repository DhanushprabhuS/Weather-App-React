import React from 'react';
import videoBG from './Videos/Clouds.mp4';
import Input from './Input.js'
import './Style/videos.css'
const BGvideo = () => {
    return (
        <div className='main'>
            <div className="overlay"> </div>
            <video src={videoBG} autoPlay loop muted />
            <div className='content'>
                <Input/>
            </div>
        </div>
    );
}

export default BGvideo;
