import {useEffect, useState} from 'react';
import { Navigation } from '../components/navigation.component';
import { SideBar } from '../components/side-bar.component';
import {Feed} from '../components/feed.component'
import profilePicture1 from "../assets/profile_pic_1.jpg";
import profilePicture2 from "../assets/profile_pic_2.jpg";
import profilePicture3 from "../assets/profile_pic_3.jpg";
import sunset from "../assets/sunset.jpg"
import './home.css';
import {useLocalStorage} from '../hooks/local-storage.hooks';

const initialTweets = [
    {  
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
    },
    {  
        id: 2,
        user: {
            name: 'Harold',
            username: 'h_wang',
            photoId:profilePicture2
        },
        text: 'Vacation is going great!',
        timestamp: "10m",
        commentCount: 3,
        likeCount: 14,
        photoId: sunset
    },
    {  
        id: 3,
        user: {
            name: 'Andrea',
            username: 'andy_landerson',
            photoId:profilePicture3
        },
        text: 'How many lemons do I need to make lemonade?',
        timestamp: "2m",
        commentCount: 10,
        likeCount: 5,
        photoId: null
    }
]

const AsyncExample = ()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setIsLoading(true)
       fetch('https://hn.algolia.com/api/v1/search?query=react')
        .then((res)=>res.json())
        .then((body)=>{
            // throw new Error('Oops, something went wrong!')
            setData(body)
        })
        .catch((e)=>setError(e.message))
        .finally(()=>{
            setIsLoading(false)
        })
    }, [])
    return <>
    {isLoading ? "Loading..." : "Hello!"}
    {error ? error : "No errors"}
    </>
}

export const Home = ()=>{
    const [tweets, setTweets] = useState(initialTweets)
    const [filteredTweets, setFilteredTweets] = useState([])
    const [value, setValue] = useLocalStorage("search-keyword", '')

    const handleSearch = (keyword)=>{
        const searchTweets = tweets.filter((tweet)=>tweet.text.includes(keyword))
        setValue(keyword)
        setFilteredTweets(searchTweets)
    }

    let modifiedTweets = tweets;
    if(filteredTweets.length > 0){
        modifiedTweets= filteredTweets;
    } 

    return <div className='home-container'>
        <AsyncExample />
      {/* <Navigation />
      <Feed tweets={modifiedTweets} setTweets={setTweets}/>
      <SideBar onChange={handleSearch} keyword={value} /> */}
    </div>
}

// filteredTweets.length > 0 ? filteredTweets : tweets 

// if(filteredTweets.length>0){
//     return filteredTweets;
// } else {
//     return tweets;
// }