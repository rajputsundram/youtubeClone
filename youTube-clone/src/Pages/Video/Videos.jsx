import React from 'react'
import './Videos.css'
import { useParams } from 'react-router-dom'
import Recommendeds from '../../Components/Recommended/Recommendeds'
import PlayVideo from '../../Components/PlayVideo/PlayVideos'

const Video=()=>{
    const{videoId,categoryId}=useParams();
    return(<>
    <div className="play-container">
        <PlayVideo videoId={videoId}></PlayVideo>
        <Recommendeds categoryId={categoryId}></Recommendeds>
    </div>
    </>)
}

export default Video;