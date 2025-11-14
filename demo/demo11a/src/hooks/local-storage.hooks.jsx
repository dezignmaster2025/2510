import {useEffect, useState} from 'react';

export const useLocalStorage = (key, initialValue)=>{
    const [value, setValue] = useState(()=>{
        // if localStorage.getItem(key) has a value? return that value, 
        // otherwise return initialValue
        return localStorage.getItem(key) || initialValue
    });

    useEffect(()=>{
        localStorage.setItem(key, value);
    }, [value])

    return [value, setValue]

}