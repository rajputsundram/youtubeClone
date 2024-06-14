
import React, { useEffect, useState } from 'react'
import './PlayVideos.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../Data'
import { value_converter } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const PlayVideo=()=>{
    const {videoId}=useParams();

  const[commentData,setCommentData]=useState([]);
    const [apiData,setApiData]=useState();
    const [channelData,setChannelData]=useState(null)

    const fetchVideoData=async()=>{
        // fetching video data
        // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    }
const fetchOtherData=async()=>{
// fetching subscriber data

    const channelData_url=` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
}

const fetchCommentData=async()=>{
    // fetching comment data
    

        const commentData_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentData_url).then(res=>res.json()).then(data=>setCommentData(data.items[0]));
    }



    useEffect(()=>{
        fetchVideoData()
    },[videoId])

    useEffect(()=>{
fetchOtherData();
    },[apiData])
    return(<>
    <div className="play-video">
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay;clipboard-write; encryption;"></iframe>
        <h3>{apiData?apiData.snippet.title:"title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData? value_converter(apiData.statistics.viewCount):"19K"} Views &bull; {moment(apiData?apiData.snippet.publishedAt:"1 days ago").fromNow()} </p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />125</span>
                <span><img src={save} alt="" />125</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"2M"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0,120):"Description Here"}</p>
            <p>Subscribe {apiData?apiData.snippet.channelTitle:""} to watch More Videos related to this </p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
            {commentData.map((item,index)=>{
                return(
                    <div key={index} className="comment">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{}</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                
                )

            })}

          
            
                </div>
            </div>
            
           
    
    
    </>)
}

export default PlayVideo;