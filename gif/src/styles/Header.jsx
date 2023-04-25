 import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 const Header=()=>
 {
    return(
        <>
        <GlobalStyle/>
            <div className="header" style={headstyle}>
                    <img src="../images/giphyLogo.png" alt="logo" style={image}/>
                <Menu className="menu" >
                    <ButtonWrapper className="reaction">
                    <MenuButton className="hover-reaction"><h2>Reactions</h2></MenuButton></ButtonWrapper>
                    <ButtonWrapper className="entertainment">
                    <MenuButton className="hover-entertainment"><h2>Entertainment</h2></MenuButton></ButtonWrapper>
                    <ButtonWrapper className="sports">
                    <MenuButton className="hover-sports"><h2>Sports</h2></MenuButton></ButtonWrapper>
                    <ButtonWrapper className="stickers">
                    <MenuButton className="hover-stickers"><h2>Stickers</h2></MenuButton></ButtonWrapper>
                    <ButtonWrapper className="artists">
                    <MenuButton className="hover-artists"><h2>Artists</h2></MenuButton></ButtonWrapper>
                    <ButtonWrapper className="icons">
                    <MenuButton className="hover-icons">
                    <MoreVertIcon/>
                    </MenuButton></ButtonWrapper>
                </Menu>
                    <Button>
                        <h2>Upload</h2>
                    </Button>
                    <Button>
                        <h2>Create</h2>
                    </Button>
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
    width:"100px",
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

const Button=styled.div`
    ${'' /* position:relative */}

    background-color:#6d63ff;
    width:75px;
    height:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${'' /* flex:.5; */}
    margin-right:3px;
    margin-left:3px;
    border-radius:5px;
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
    margin-right:10px;
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