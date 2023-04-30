import React from 'react'
import './TrendingGiphy.css'
const TrendingGiphy = ({giphy}) => {
  // prop ki jgh prop paas hua hai isme curly braces hta kr prop.giphy bhi paas kr skte the
  return (
   <>
   <div className='trending-items' key={giphy.id}>
    <img src={giphy.images.downsized.url} alt={giphy.title}/>
    </div>
   </>

  )
}

export default TrendingGiphy