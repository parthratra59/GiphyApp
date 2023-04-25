

import {baseURL} from './Createinstanceapi';
import axios from "./Createinstanceapi"

// const baseURL = "https://api.giphy.com/v1/gifs/";
const DEFAULT_PARAMS ={
    api_key : process.env.REACT_APP_GIPHY_API_KEY,
    // query bhi dalege jaise map mai places ki dali thi
    limit:50,
}
 
const Giphy = ()=>{
    return axios.get("trending",{
        baseURL:baseURL,
        params:DEFAULT_PARAMS,
    })
}

export default Giphy;