import React from 'react'

const Clips = (giphy) => {
  return (
    <div className='cliping' key={giphy.id}>
    <img src={giphy.images.downsized.url} alt={giphy.title}></img>
</div>
  )
}

export default Clips