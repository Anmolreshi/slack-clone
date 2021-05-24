import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

function SidebarOption({Icon,addchanneloption,title,id}) {
    const dispatch = useDispatch();
    const addchannel=()=>{
        const channelname=prompt('Please Enter The Channel Name :');
        if(channelname){
            db.collection('rooms').add({
                name:channelname,
            })
        }
        else{
            alert("Error : Enter channel name again");
        }
    };
    const selectchannel=()=>{
        if(id){
            dispatch(enterRoom({
                roomId:id,
            }))
        }
    };
    return (
        <Sidebaroptions
        onClick={addchanneloption ? addchannel :selectchannel}
        >
            {Icon && <Icon fontSize="small" style={{padding:10}}/>}
            {Icon?
                  (<h3>{title}</h3>)  :
                  (
                      <SidebarOptionChannel>
                         <span>#</span>{title}
                      </SidebarOptionChannel>
                  )  
        }
        </Sidebaroptions>
    )
}

export default SidebarOption;
const Sidebaroptions=styled.div`
display: flex;
font-size:12px;
align-items:center;
padding-left:10px;
cursor: pointer;
:hover{
    opacity: 0.9;
    background-color: #340e36;
}
>h3{
    font-weight: 500;
}
>h3 >span{
    padding:15px;
}
`;
const SidebarOptionChannel=styled.h3`
padding: 10px 0;
font-weight: 300;

`;
