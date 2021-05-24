import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    // Authentication for sign In 
    const signIn = (e )=> {
        e.preventDefault();
    auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
        }).catch((error)=>alert(error.message));

    };
    return (
        <LoginConatiner>
            <LoginInner>
            <img src="https://sm.pcmag.com/pcmag_in/review/s/slack/slack_bqt4.jpg"
             alt=""/>
             <h1>Sign In To Anmol Family</h1>
             <p>anmol.slack.com</p>
             <Button 
             onClick={signIn}
             >Sign In With Google</Button>
            </LoginInner>
        </LoginConatiner>
    )
}

export default Login;
const LoginConatiner=styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;
const LoginInner=styled.div`
padding: 100px;
text-align: center;
border-radius: 10px;
background-color: white;
box-shadow: 0px 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
>img{
    object-fit: contain;
    height: 100px;
    margin-bottom:50px;
}
>button{
    margin-top:50px;

    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}
>button:hover{
    background-color: #056332 !important;
}
>h1{
    font-family:sans-serif;
}
>p{
    font-family:sans-serif;
}
`;
