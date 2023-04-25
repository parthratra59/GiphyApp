import React from 'react'
import "./SearchContainer.css";
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = () => {
  return (
    <>
        <div className='searchbox'>
            <input type='text' placeholder='Search all the GIFS and Stickers here' className='inputing'></input>
            <div className='searchicon'>
                <SearchIcon/>
            </div>
        </div>
    </>
  )
}

export default SearchContainer