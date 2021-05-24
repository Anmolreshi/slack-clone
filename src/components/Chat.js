import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React,{useRef,useEffect} from 'react';
import Message1 from './Message1';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import Chatinput from './Chatinput';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Chat() {
    const chatRef=useRef(null);
    const roomid = useSelector(selectRoomId);
    const [roomdetails]=useDocument(
        roomid && db.collection('rooms').doc(roomid)
    )
    const [roommessage,loading]=useCollection(
        roomid && db.collection('rooms')
        .doc(roomid).collection('messages').orderBy('timestamp','asc')
    )
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior:"smooth",
        });
    }, [roomid,loading])
    return (
        <Chatcontainer>
            {roomdetails && roommessage && (
                <>
                <Header>
                    <HeaderLeft>
                       <h4><strong>#{roomdetails?.data().name}</strong></h4>
                       <StarBorderOutlined/>
                    </HeaderLeft>
                    <HeaderRight>
                      <p>
                          <InfoOutlined/>Details
                      </p>
                    </HeaderRight>
                </Header>
     
                <ChatMessage>
                   {roommessage?.docs.map(doc=>{
                       const {message,timestamp,user,userImage}=doc.data();
                       return(
                           <Message1
                           key={doc.id}
                           message={message}
                           timestmp={timestamp}
                           user={user}
                           userImage={userImage}/>
     
                       );
                   })}
                   <Chatbottom ref={chatRef}/>
                </ChatMessage>
                <Chatinput
                chatRef={chatRef}
                channelId={roomid}
                channelName={roomdetails?.data().name}/>
                </>


            )}
            
        </Chatcontainer>
    )
}

export default Chat;
const ChatMessage=styled.div`

`;
const Chatbottom=styled.div`
padding-bottom:200px;
`;
const Chatcontainer=styled.div`
 flex: 0.7;
 flex-grow: 1;
 overflow-y: scroll;
 margin-top: 60px;
`;
const Header=styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border:1px solid lightgray;
`;
const HeaderLeft=styled.div`
display: flex;
align-items: center;
>h4{
    display:flex;
    text-transform: lowercase;
    margin-right: 10px;
}
>h4 >.MuiSvgIcon-root{
    margin-left: 20px;
    font-size:18px;
}
`;
const HeaderRight=styled.div`
>p{
    display: flex;
    align-items: center;
    font-size: 14px;
}
>p >.MuiSvgIcon-root{
    margin-right: 5px !important;
    font-size: 16px;
}
`;
