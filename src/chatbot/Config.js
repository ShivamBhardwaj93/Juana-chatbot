import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import BaseOptions from "../components/baseOptions/BaseOptions";
// import LinkList from "../components/LinkList/LinkList";
import MoreCourseOptions from "../components/kindsofcoursesoptions/TypesOfCourses";
// import GameBasedLearning from "../components/kindsofcoursesoptions/GameBasedLearning";
// import ExperientialLearning from "../components/kindsofcoursesoptions/ExperentialLearning";
// import PersonalDevelopment from "../components/kindsofcoursesoptions/PersonalDevelopment";
// import ActionProvider from '../../../recheck/chat/src/chatbot/ActionProvider';
const config = { 
  botName: "Inkie",
  initialMessages: [createChatBotMessage("Hi, I am Inkie! "), createChatBotMessage("Hope you are doing well. What would you like to Ask?"), {
    //options object is given here
    widget: 'BaseOptions',
  }],
  widgets: [
    {
      widgetName: "BaseOptions",
      widgetFunc: (props) => <BaseOptions {...props} />,
    },
    {
        widgetName: "CertainCourse",
        widgetFunc: (props) => <MoreCourseOptions {...props} />,
        // props: {
        //   options: [
        //     {
        //       text: "Game Based Learning",
        //       handler: window.open(<GameBasedLearning/>),
        //       id: 1,
        //     },
        //     {
        //       text: "Experiential Learing",
        //       handler:<ExperientialLearning />,
        //       id: 2,
        //     },
        //     {
        //       text: "Personal Development",
        //       handler:<PersonalDevelopment />,
        //       id: 3,
        //     },
        //   ],
        // },
    },
    
  ],



//here we have defined the various steps in this extra
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config;