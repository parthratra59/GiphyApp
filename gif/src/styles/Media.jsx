import React, { useEffect, useState } from 'react'
import "./Media.css"
import {Giphy, fetchSearchGiphys} from '../API/Giphy';
import TrendingGiphy from './TrendingGiphy';
import Artists from '../Artists';
import ArtistGiphy from './ArtistGiphy';
import Clips from './Clips';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import axios from 'axios'
// import fetchtrendingdiphys from '../api/Giphyapi'
// import Giphyapi from '../api/Giphyapi'

const Media = () => {

  const [trending,settrending] =useState([])
  const [hiartist,setArtists] =useState([])
  const [clips,setClips]=useState([])
  // random  data ke  liye hr baar
  const randomizeData = (content) =>{
    return content.data.sort(()=>Math.random()-0.5)
  };

  // axios mai jaise kiya tha na easy method mai vese kr rhe
  const gettrendinfgiphys = async()=>{
    // almost same code hai axios vali file mai tha tutorial
    try{
    const trending =await Giphy();
    settrending(randomizeData(trending.data));
    }
    catch(error){
      console.log(error)
    }
  }

  const getArtistsGiphys = async () => {
    try {
      // Artists mai baar baar request jaegi because sare array mai hai toh ek baar mai sari promises resolve hojae isliye promise.all
    // jb ek se jyada api ek sath run krani hoti then promise.all use hota
      const artistGiphysList = await Promise.all(
        Artists.map(async (kuchbhilikhdo) => {
        const  ratra = await fetchSearchGiphys(kuchbhilikhdo)
        return ratra.data.data
      }))
      // agr yh nhi (flat) likhege toh array ke andr sub array bn jaege
      // [Array(50), Array(50), Array(50), Array(50), Array(31), Array(50)]
      // ki 0 index ke itne gif mile iske itne mile like this
      // merge krne ke liye 
      const randomizedArtistData = artistGiphysList.flat().sort(() => Math.random() - 0.5);
      setArtists(randomizedArtistData);
    } catch (error) {
      console.log(error)
    }
  }

  const getclips=async()=>{
    try{
      const getclips = await fetchSearchGiphys();
      setClips(randomizeData(getclips));
    }
    catch(error){
      console.log('error is showing')
    }
  }

 useEffect(()=>{
    gettrendinfgiphys();
    getArtistsGiphys();
    getclips();
 },[])

// console.log(trending,'what is in trending');

//  console.log(hiartist,"what is this artists")
// console.log(clips,"what are the clips")
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,  // show 3 slides at once
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1024, // change to 2 slides at slideshow when screen size is less than 1024 px wide
//       settings: {
//         slidesToShow: 2,
//       }
//     },
//     {
//       breakpoint: 768, // change to 1 slide at slideshow when screen size is less than 768 px wide
//       settings: {
//         slidesToShow: 1,
//       }
//     }
//   ]
// };



  return (
    <>
      <div className='media'>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/trending.svg" alt='trending' />
            <h1>Trending</h1>
            </div>
            <div className='trending-container' id='Trending'  >
            {/* dikhane ke liye map use hota map key and data store krta toh show krne ke liye sirf title likh diya */}
           
              {trending.map((parth,index)=>{
                {/* koi uske andr numbering nhi thi aur kl ke din kuch update hota new add hota toh pura vapis update krna pdta that's why 
                index dediya ab new value add bhi hoegi but then also index bdega */}
                return <TrendingGiphy giphy ={parth} key={index}/>
                {/* key and giphy prop hai aise toh agr muje khi dusri comp mai us krna toh prop krke use kr skte */}
              })}
            
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/artists.svg" alt='artists'/>
            <h1>Artists</h1>
            </div>
            <div className='artist-container'  id='Artists' >
              {/* loop loagao array mai jo array bnake aye hai Artists mai */}
              {hiartist.map((hello, index) => {
                return <ArtistGiphy giphy={hello} key={index}/>
              })}
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/Clips.svg" alt='clips'/>
            <h1>Clips</h1>
            </div>
            <div className='clips-container'  id='Clips'>
              {clips.map((i_m_good,index)=>{
                return <Clips giphy={i_m_good} key={index}/>
              })}
            </div>
        </div>
        <div className='row'>
            <div className='row-header'>
            <img src="/images/stories.svg" alt='stories'  />
            <h1>Stories</h1>
            </div>
            <div className='trending-container' id='Stories'>
              <p>Content</p>
            </div>
        </div>
        
        
      </div>
    </>
  )
}


export default Media