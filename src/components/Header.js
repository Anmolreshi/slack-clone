import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebase';

function Header() {
    const [user]=useAuthState(auth);
    return (
        <HeaderContainer>
            {/* Header Left  */}
           <HeaderLeft>
               <HeaderAvatar
               //todo add on click
               onClick={()=>auth.signOut()}
               src={user?.photoURL}
               alt={user?.displayname}
               />
               <AccessTime/>
           </HeaderLeft>
            {/* header search  */}
             <HeaderSearch>
                 <Search/>
                 <input placeholder="Search Channel"/>
             </HeaderSearch>
            {/* header right  */}
            <HeaderRight>
                   <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
    )
}
export default Header;
const HeaderRight= styled.div`
flex:0.3;
display:flex;
align-items: flex-end;
>.MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}
`;
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;
const HeaderSearch = styled.div`
flex:0.4;
opacity: 1;
border-radius: 6px;
text-align:center;
background-color: #421f44;
display: flex;
padding: 0 50px;
color:gray;
border: 1px gray solid;

>input{
    background-color: transparent;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:0;
    color:white;
}
`;
const HeaderLeft =styled.div`
flex:0.3;
display:flex;
align-items: center;
margin-left:20px;
>.MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar=styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.8;
}
`;
