
import './navigation.css'
import ChevronDownIcon from '../assets/chevron-down.svg'
import CommentIcon from '../assets/chat.svg'
import RetweetIcon from '../assets/retweet.svg'
import LikeIcon from '../assets/heart.svg'
import ShareIcon from '../assets/share.svg'
import './feed.css';
import profilePicture1 from "../assets/profile_pic_1.jpg";
import {useState } from 'react';

const Tweet = ({tweet})=>{
    return  <div className='tweet-container'>
                <img src={tweet.user.photoId} className='profile-pic' />
                <div className='tweet-right-container'>
                    <div className='tweet-user-section-container'>
                        <div className='tweet-user-section'>
                            <h3>{tweet.user.name}</h3>
                            <p>{tweet.user.username}</p>
                            <p>{tweet.timestamp}</p>
                        </div>
                        <img src={ChevronDownIcon} className='nav-icon' />
                    </div>
                    <div className='tweet-body'>
                        <p>{tweet.text}</p>
                        {tweet.photoId && <img src={tweet.photoId} className='tweet-photo'/>}
                    </div>
                    <div className='tweet-action-container'>
                        <img src={CommentIcon} className='tweet-action-icon' />
                        <img src={RetweetIcon} className='tweet-action-icon' />
                        <img src={LikeIcon} className='tweet-action-icon' />
                        <img src={ShareIcon} className='tweet-action-icon' />
                    </div>
                </div>
            </div>

}

const tweetTemp = {  
    id: 1,
    user: {
        name: 'John',
        username: 'john_88',
        photoId:profilePicture1
    },
    text: 'Giving standup comedy a go. Open mic starts at 7, hit me up if you want tickets',
    timestamp: "3m",
    commentCount: 1,
    likeCount: 8,
    photoId: null
}

const TweetBox = ({setTweets})=>{
    const [tweetText, setTweetText] = useState("");
    
    const handlePostTweet = ()=>{
        const newTweet = {  
            id: 1,
            user: {
                name: 'Ammar',
                username: 'ammar_88',
                photoId:profilePicture1
            },
            text: tweetText,
            timestamp: "1s",
            commentCount: 0,
            likeCount: 0,
            photoId: null
        }
        // prev === tweets, tweets is an array of the original tweets
        // we're retruning a new array, and 
        // setTweets((prevTweetsState)=>{
        //     const indexOfLastItem = prevTweetsState.length-1;
        //     const lastExistingStateId = prevTweetsState[indexOfLastItem].id;
        //     const updatedNewTweet =  {...newTweet, id: lastExistingStateId+1};
        //     return [updatedNewTweet, ...prevTweetsState]
        // })

        setTweets((prev)=>[{...newTweet, id: prev[prev.length-1].id++}, ...prev])
    }

    return <div className='tweet-container'>                
                <img src={profilePicture1} className='profile-pic' />
                <div className='input-container'>
                    {/* // TODO: plug in onChange */}
                    <input type='text' onChange={(event)=>setTweetText(event.target.value)} className='tweet-input' placeholder="What's happening?" />
                    <button onClick={handlePostTweet} className='tweet-input-btn'>Tweet</button>
                </div>
        </div>
}

export const Feed = ({tweets, setTweets})=>{    

    return <section className="feed-container">
        <TweetBox setTweets={setTweets} />
        {tweets.map((tweet)=><Tweet key={tweet.id} tweet={tweet} />)}
    </section>
}
