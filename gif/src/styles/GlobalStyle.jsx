import {createGlobalStyle} from "styled-components"
const styled=createGlobalStyle`
*{
    margin:0;
    box-sizing:border-box;
    padding:0;
    font-family:Nunito;

}
body{
    background-color:black;
}
${'' /* this is a main logic behind  why all the things come in between of the window*/}
.app{
    ${'' /* background-color:purple; */}
    display:flex;
    justify-content:center;
    ${'' /* --------> aise chlta justify content */}
    
}


.main{
    width:1200px;
    ${'' /* background-color:teal; */}
    margin-top:15px;
    color:white;
}
`
export default styled;