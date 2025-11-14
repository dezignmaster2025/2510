import {useState, useRef} from 'react';
import './navigation.css'
import './side-bar.css';

export const SideBar = ({onChange, keyword})=>{
    const [hasError, setHasError] = useState(false)
    const inputRef = useRef(null);
    // document.getElementById('input').style.color = "red";
    
    const handleSearch = ()=>{
        const searchTerm = inputRef.current.value
        if(searchTerm === "") {
            setHasError(true)
        } else {
            onChange(searchTerm)
            if(hasError) {
                setHasError(false)
            }
        }
    }
    
    return <section className="side-bar-container">
        <input ref={inputRef} type="text" name="search" className={`search-bar ${hasError ? "error" : ''}`} placeholder='Search Twitter' />
        <button onClick={()=>inputRef.current.focus()}>Focus input</button>
        <button onClick={handleSearch}>Search</button>
    </section>
}
