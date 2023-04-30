 import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle"
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from 'react-scroll'
import {Trending} from './Media'
import {Artists} from './Media'
import {Clips} from './Media'
import { Random } from "../API/Giphy";
// import {Trending} from './Media'
 const Header=()=>
 {
  const [click,setclick]=useState(false)
  const closeMenu=()=> 
  {setclick(false)
  }
  // const randomize = (content) =>{
  //   return content.data.sort(()=>Math.random()-0.5)
  // };
  const [random,setrandom] =useState([])
  const cric=async ()=>{
    try{
      const response=await fetch('https://api.giphy.com/v1/gifs/random?api_key=JrS6xDKq1NVKCTO6jEG4W9P88j2TFXti');
       const res=await response.json();
    setrandom(res.data);
    }
    catch(error)
    {
      console.log(error)
    }
  }

  useEffect(()=>{
    cric()
    
 },[])

 console.log(random.title)
    return(
        <>
        <GlobalStyle/>
                <div className="pending-website" style={{display:"flex",justifyContent:"center",background:"purple"}}>
                    <h1 >This Webapp is in progress it will update soon</h1>
                </div>
            <div className="header" style={headstyle}>
                    <img src="../images/giphyLogo.png" alt="logo" style={image}/>
                <Menu className="menu" >
                    <ButtonWrapper className="reaction">
                    <MenuButton className="hover-reaction">
                    <Link  to="Trending" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><h2>Trending</h2></Link>
                    </MenuButton></ButtonWrapper>
                    <ButtonWrapper className="entertainment">
                    <MenuButton className="hover-entertainment">
                    <Link  to="Artists" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><h2>Artists</h2></Link>
                    </MenuButton></ButtonWrapper>
                    <ButtonWrapper className="sports">
                    <MenuButton className="hover-sports">
                    <Link  to="Clips" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><h2>Clips</h2></Link>
                    </MenuButton></ButtonWrapper>
                    <ButtonWrapper className="stickers">
                    <MenuButton className="hover-stickers">
                    <Link  to="Stories" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><h2>Stories</h2></Link>
                    </MenuButton></ButtonWrapper>
                  
                    
                </Menu>
                    <Random1>
                        <h2>Like</h2>
                    </Random1>
                    <Random2 onClick={cric}>
                        
                        <h2>Random</h2>
                        
                    </Random2>
                    <Avatar>
                        <img src="../images/avatar.png" alt="photo"/>
                        <h2>Parth</h2>
                        <KeyboardArrowDownIcon/>
                    </Avatar>


            </div>
        </>
    )
 }

const headstyle={
    // backgroundColor:"orange",
    display:"flex",
    alignItems:"center",
    fontSize:"13px",
    cursor:"pointer"
}
const image={
    width:"150px",
}
const Menu = styled.div`
${'' /* background-color:purple; */}
display:flex;
flex:1;
${'' /* border-radius:7px; */}
justify-content: space-between;
height:50px;
align-items:center;
border-radius:5px;
padding:5px;

`
const Random1=styled.div`
    ${'' /* position:relative */}

    background-color:#6d63ff;
    width:105px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${'' /* flex:.5; */}
    margin-right:15px;
    margin-left:15px;
    border-radius:5px;
    ${'' /* padding:2px; */}
`

const Random2=styled.div`
    ${'' /* position:relative */}

    background-color:#6d63ff;
    width:105px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${'' /* flex:.5; */}
    margin-right:15px;
    margin-left:15px;
    border-radius:5px;
    ${'' /* padding:2px; */}
`
const Avatar = styled.div`
  height: 50px;
  ${'' /* position:relative; */}
  background-color: grey;
  ${'' /* width:100px; */}
  img {
    max-height: 100%;
    max-width: 100%;

  }
  h2{
    ${'' /* display:flex; */}
    ${'' /* justify-content:space-between; */}
    padding:15px;
  }
  display:flex;
  justify-content: space-between;
  align-items:center;
  ${'' /* padding:5px; */}
  `
    const ButtonWrapper =styled.div`
    background-color:teal;
    height:35px;
    display:flex;
    ${'' /* align items vetically kaam krta so jo bhi letter hai upr ki trf shif hogye hai teal colour ke */}
    align-items:flex-start;
    margin-left:50px;
    ${'' /* justify-content:space-between; */}


    &.reaction {
  background: linear-gradient(90deg, #43e0ff 0%, #456ffc 75%);
}

&.entertainment {
  background: linear-gradient(90deg, #456ffc 0%, #7145fc 69%);
}

&.sports {
  background: linear-gradient(90deg, #7145fc 0%, #a945fc 71%, #c445fc 92%);
}

&.stickers {
  background: linear-gradient(90deg, #c445fc 0%, #ef45fc 75%);
}

&.artists {
  background: linear-gradient(90deg, #ef45fc 0%, #fc45c5 62%);
}

&.icons {
  background: linear-gradient(90deg, #fc45c5 0%, #fc4584 76%);
}







    `

    const MenuButton =styled.div`
    background-color:black;
    height:30px;
    display:flex;
    padding:10px;
    align-items:center;

    &.hover-reaction:hover{
        background: linear-gradient(90deg, #43e0ff 0%, #456ffc 75%);
    }
    &.hover-entertainment:hover{
        background: linear-gradient(90deg, #456ffc 0%, #7145fc 69%);
    }
    &.hover-sports:hover{
        background: linear-gradient(90deg, #7145fc 0%, #a945fc 71%, #c445fc 92%);

    }
    &.hover-stickers:hover{
        background: linear-gradient(90deg, #c445fc 0%, #ef45fc 75%);
    }
    &.hover-artists:hover{

        background: linear-gradient(90deg, #ef45fc 0%, #fc45c5 62%);
    }
    &.hover-icons:hover{

        background: linear-gradient(90deg, #fc45c5 0%, #fc4584 76%);
    }


    `
 export default Header