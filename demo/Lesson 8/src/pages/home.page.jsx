import {useState} from 'react';
import { Navigation } from '../components/navigation.component';
import { SideBar } from '../components/side-bar.component';
import {Feed} from '../components/feed.component'

const tweets = [
    {  
        id: 1,
        name: 'John',
        occupation: 'Engineer',
        age: 27

    }
]

export const Home = ()=>{
    return <>
      <Navigation />
      <Feed />
      <SideBar />
    </>
}