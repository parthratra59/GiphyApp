import React, { useEffect, useState } from 'react'
import "./Media.css"
import Giphy from '../API/Giphy';
// import axios from 'axios'
// import fetchtrendingdiphys from '../api/Giphyapi'
// import Giphyapi from '../api/Giphyapi'

const Media = () => {

  const [trending,settrending] =useState([])
  // random  data ke  liye
  const randomizeData = (content) =>{
    return content.data.sort(()=>Math.random()-0.5)
  };

  // axios mai jaise kiya tha na easy method mai vese kr rhe
  const gettrendinfgiphys = async()=>{
    // almost same code hai axios vali file mai tha tutorial
    const trending =await Giphy();
    settrending(randomizeData(trending.data));
  }

 useEffect(()=>{
    gettrendinfgiphys();
 },[])

console.log(trending,'what is in trending');

 

  return (
    <>
      <div className='media'>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/trending.svg" alt='trending' />
            <h1>Trending</h1>
            </div>
            <div className='trending-container'>
              <p>Content</p>
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/artists.svg" alt='trending' />
            <h1>Artists</h1>
            </div>
            <div className='trending-container'>
              <p>Content</p>
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/Clips.svg" alt='trending' />
            <h1>Clips</h1>
            </div>
            <div className='trending-container'>
              <p>Content</p>
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/stories.svg" alt='trending' />
            <h1>Stories</h1>
            </div>
            <div className='trending-container'>
              <p>Content</p>
            </div>
        </div>
        
        
      </div>
    </>
  )
}


export default Media