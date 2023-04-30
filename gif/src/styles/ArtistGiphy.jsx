import React from 'react'
import './ArtistGiphy.css'

const ArtistGiphy = ({giphy}) => {
  return (
    <>
        <div className='artistphoto' key={giphy.id}>
            <img src={giphy.images.downsized.url} alt={giphy.title}></img>
        </div>
    </>
  )
}

export default ArtistGiphy