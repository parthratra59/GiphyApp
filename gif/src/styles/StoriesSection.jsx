import React from 'react'
import './StoriesSection.css';
export const StoriesSection = ({giphyArray}) => {
// component within the component

    const hello=()=>{
        let randomIndex=Math.floor(Math.random()*60);
        let randomgiphying= giphyArray[randomIndex];
        if(randomgiphying)
        {
            return randomgiphying;
        }
    }
   const Giphying=({giphy})=>{
    return (
        <div className='title'>
          <div className='giphying'>
          <div className='text-title'>
            <p>{giphy?.title}</p>
            </div>
            <img src={giphy ? giphy.images.downsized.url : ''} alt="Giphy" />
          </div>
        </div>
      );      
    }
  return (
    <div className='stories-section'>
        <div className='first'>
        {/* <h1>Tile</h1>
        <h1>Tile</h1>
        <h1>Tile</h1> */}
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        </div>
        <div className='second'>
            {/* <Giphing/> */}
            {/* <h1>Tile</h1> */}
        {/* <h1>Tile</h1>
        <h1>Tile</h1> */}
        {/* yh bhi kr skte hai aUR component vala kaam bhi kr skte concept ke liye ki baar baad vohi code likhna nhi pde*/}
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        </div>
        <div className='third'>
            <Giphying giphy={hello()}/>
            <Giphying giphy={hello()}/>
            <Giphying giphy={hello()}/>
            <Giphying giphy={hello()}/>
        </div>
        <div className='forth'>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>

        </div>
        <div className='fifth'>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        <Giphying giphy={hello()}/>
        </div>

    </div>
  )
}
