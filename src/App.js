import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user,loading]=useAuthState(auth);
  if(loading){
    return (
      <AppLoading>
        <ApploadingContent>
            <img src="https://sm.pcmag.com/pcmag_in/review/s/slack/slack_bqt4.jpg"
             alt=""/>
             <Spinner
             name="ball-spin-fade-loader"
             color="purple"
             fadeIn="none"
             />
        </ApploadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="App">
     <Router>
       {
         !user ?(
         <Login/>
         ):(
          <>
          <Header/>
            <AppBody>
              <Sidebar/>
                <Switch>
                    <Route path="/" exact>
                     {/* chat component  */}
                        <Chat/>
                    </Route>
                 </Switch>
            </AppBody>
          </>
         )
       }
     
    </Router>
    </div>
  );
}

export default App;
const AppBody=styled.div`
display:flex;
height:100vh;
`;
const AppLoading =styled.div`
display: grid;
place-items: center;
height: 100vh;
width:100vw;

`;
const ApploadingContent = styled.div`
text-align: center;
padding-bottom: 100px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
>img{
  height: 100px;
  padding:20px;
  margin-bottom: 40px;
}
`;