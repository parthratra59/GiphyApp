import axios from "axios";

const Createinstanceapi = axios.create({
   baseURL: "https://api.giphy.com/v1/gifs/" ,
    // jo main url hogi baki toh slash hoke age bd jati
})
export const baseURL = Createinstanceapi.defaults.baseURL;
export default Createinstanceapi