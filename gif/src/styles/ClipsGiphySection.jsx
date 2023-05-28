import React, { useEffect, useState } from 'react'
import "./ClipsGiphySection.css"
const ClipsGiphySection = ({giphyArray}) => {
    // yh sb chije us media component mai bbhi kr skte


    const[giphys,setGiphys]=useState([])
    const randomizeData = (giphyArray) =>{
        return giphyArray.sort(()=>Math.random()-0.5)
      };
    useEffect(()=>{
            let randomData=randomizeData(giphyArray);
            // 50 thodi ek baar mai lelege hm 3 lege 0 to 2 
            setGiphys(randomData.slice(0,3));
        },[giphyArray])

        // giphyArray baar bbaar re render kr na pdega isliye use Effect hook mai vo use hua

  return (



    <div className='clips_grid'>

        
        {giphys && giphys.length?(
            <>
        <div className='first_column'>
            <img src={giphys?.[0].images.downsized.url}/>
        
            <div className='text-title'>
                {/* <img src='../images/giphyIconDark.png'/> */}
                {/* <p>{giphys?.[0].title}</p> */}
            </div>
        </div>
        <div className='second_column'>
        <img src={giphys?.[1].images.downsized.url}/>
        <div className='text-title'>
                {/* <img src='../images/giphyIconDark.png'/>
                <p>{giphys?.[1].title}</p> */}
        </div>
        <img src={giphys?.[2].images.downsized.url}/>
        <div className='text-title'>
                {/* <img src='../images/giphyIconDark.png'/>
                <p>{giphys?.[2].title}</p> */}
        </div>
        </div>

                

        
        </>
        ):null}
     </div>
  )
}

export default ClipsGiphySection