

import {baseURL} from './Createinstanceapi';
import axios from "./Createinstanceapi"

// const baseURL = "https://api.giphy.com/v1/gifs/";
const DEFAULT_PARAMS ={
    api_key : process.env.REACT_APP_GIPHY_API_KEY,
    // query bhi dalege jaise map mai places ki dali thi
    limit:50,
    // ki ek baar mai api return 50 gif
}
 
export const Trendgiphing = ()=>{
    return axios.get("trending",{
        baseURL:baseURL,
        params:DEFAULT_PARAMS,
    })
}

// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

// yh general likh diya hai jo mai reuse kr sku
export const fetchSearchGiphys=(query)=>{
    return axios.get("search",{
    baseURL:baseURL,
    params:{
        ...DEFAULT_PARAMS,
        q:query,
        // according to the link query chaiye
        
    }
})
}




