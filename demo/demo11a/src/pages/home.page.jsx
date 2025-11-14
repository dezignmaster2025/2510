import {useCallback, useEffect, useReducer, useState} from 'react';
import profilePicture1 from "../assets/profile_pic_1.jpg";
import profilePicture2 from "../assets/profile_pic_2.jpg";
import profilePicture3 from "../assets/profile_pic_3.jpg";
import sunset from "../assets/sunset.jpg"
import './home.css';
import {useLocalStorage} from '../hooks/local-storage.hooks';
import axios from 'axios';

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

const initialState = {
    data: [],
    isLoading:false,
    error: null,
    searchKeyword: undefined,
}

const asyncExReducer = (state, action)=>{
    switch(action.type){
        case "FETCH_INIT":
            return {...state, isLoading: true}
        case "FETCH_SUCCESS":
            return {...state, isLoading: false, data: action.payload}
        case "FETCH_FAILURE" :
            return {...state, isLoading: false, error: action.payload}
        case "SET_SEARCH_KEYWORD":
            return {...state, searchKeyword: action.payload}
        default:
            return state
    }
}

const AsyncExample = ()=>{
    const [{data, isLoading, error, searchKeyword}, dispatch] = useReducer(asyncExReducer, initialState)
    
    const fetchData = useCallback(async (keyword="react")=>{
        dispatch({type: "FETCH_INIT"})
        // axios.get(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
        //     .then((status)=>{
        //         setTimeout(()=>{
        //             dispatch({type: "FETCH_SUCCESS", payload: status.data.hits})
        //         },1500)
        //     })
        //     .catch((e)=>dispatch({type: "FETCH_FAILURE", payload: e.message}))
        try {            
            const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${keyword}`);
            if(res.status === 200){
                setTimeout(()=>{
                    dispatch({type: "FETCH_SUCCESS", payload: res.data.hits})
                },1500)
            } else {
                throw new Error (res.error)
            }
        } catch (e){
            dispatch({type: "FETCH_FAILURE", payload: e.message})
        }
    },[])



    useEffect(()=>{
        fetchData();
    }, [])
    return (
        error 
        ? <p>An error has occurred: {error}</p> 
        : isLoading
        ? <>Loading...</>
        : (<div>
            <input type='text' onChange={(e)=>dispatch({type: "SET_SEARCH_KEYWORD", payload: e.target.value})}></input>
            <button onClick={()=>fetchData(searchKeyword)}>Refresh</button>
            {data.map((hit)=>
                <div key={hit.title}>
                    <p>{hit.title}</p>
                </div>
                )}
                {/* <Component dipatch={dispatch} state={state}/> */}
            </div>
            ))

    // {isLoading ? "Loading..." : "Hello!"}
    // {error ? error : "No errors"}
    
    
}

const SignUpExample = ()=>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        // includes === false
        if(email.includes('@') === false){
            setEmailErrors('Please enter a valid email')
            return;
        } else if (emailErrors !== ""){
            setEmailErrors('')
        }

        if(password !== confirmPassword){
            setPasswordErrors("Passwords have to match")
            return;
        } else if(passwordErrors){
            setPasswordErrors('')
        }

        // const res = await axios.post(`https://hn.algolia.com/api/v1/search?query=${keyword}`, {
        //     username, email, password
        // });

    }

    return <div >
        <h1>Sign Up</h1>
        <form style={{ display: "flex", flexDirection: 'column', rowGap: 12}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input value={username} type='text' id="username"  onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input value={email} type='text' id="email" onChange={(e)=>setEmail(e.target.value)}></input>
                {emailErrors && <span style={{color: "red", fontSize: 10, display: "block"}}>{emailErrors}</span>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input value={password} type='password' id="password" onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password: </label>
                <input value={confirmPassword} type='password' id="confirm-password" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                {passwordErrors && <span style={{color: "red", fontSize: 10, display: "block"}}>{passwordErrors}</span>}
            </div>
            <button type='submit'>Sign up</button>
        </form>
    </div>
}
export const Home = ()=>{
    const [{data, isLoading, error, searchKeyword}, dispatch] = useReducer(asyncExReducer, initialState)
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
        <SignUpExample />
        {/* <AsyncExample /> */}
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