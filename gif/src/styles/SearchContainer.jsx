import React from 'react'
import "./SearchContainer.css";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const SearchContainer = () => {
 
  let [search,setsearch] = useState("")
  let [gifs,setGifs]=useState([])
  let [loading,setloading]=useState(false);
  const Giphy_Api="https://api.giphy.com/v1/gifs/search?api_key=JrS6xDKq1NVKCTO6jEG4W9P88j2TFXti&limit=20&offset=0&q=";

  let SearchGif =()=>{
    if(search.length>0)
    {
      setloading(true);
      fetch(Giphy_Api + search) // Append the search query to Giphy API URL
      .then((res)=>{
        setloading(false)
        return res.json()
      })
      .then((result)=>{
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
      .catch((error)=>{
        alert("something went wrong")
      })
    }
  }
  
  return (
    <>
        <div className='searchbox'>
            <input type='text' placeholder='Search all the GIFS and Stickers here' className='inputing' 
                   value={search} onChange={(e)=>setsearch(e.target.value)} ></input>
            <div className='searchicon' onClick={SearchGif}>
                <SearchIcon />
            </div>
            <div className='list'>
              {
                gifs.map((puru)=>{
                  return (
                    <div className='item'>
                      <img src={puru}/>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </>
  )
}

export default SearchContainer
