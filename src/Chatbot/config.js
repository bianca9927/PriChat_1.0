import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../component/ChatbotAvatar";
 

const config = {
  botName:"PriChat",
  initialMessages: [createChatBotMessage(`Hello! I am Prichat! I'm an assistant for your privacy😊`),createChatBotMessage(`Do you want to know the privacy policy of current product on shopping website?`)],//for dialogflow
  //initialMessages:[createChatBotMessage(`Hello! I'm PriChat! How can I help you?`)],
  customComponents:{
    botAvatar:(props)=><BotAvatar{...props}/>
  },
  customStyles:{
    
    botMessageBox:{
      backgroundColor:"green",
    },
    chatButton:{
      backgroundColor:"green",
    },
  },
  state:{ 
    todos:[]
  },


};


export default config

