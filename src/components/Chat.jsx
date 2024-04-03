import React from 'react';
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from './Messages';
import Input from './Input';

function Chat(){
  return(
    <div className='chat'>
      <div className='chatInfo'>
        <span>Chandler</span>
        <div className='chatIcons'>
          <img src={Cam} alt="cam" />
          <img src={Add} alt="Add" />
          <img src={More} alt="More" />
        </div>
      </div> 
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;