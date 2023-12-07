import React from "react";

import "../baseOptions/Options.css";
import GameBasedLearning from "./GameBasedLearning";
import ExperientialLearning from "./ExperentialLearning";
import PersonalDevelopment from "./PersonalDevelopment";

const MoreCourseOptions = (props) => {
  const options = [
    {
      text: "Game Based Learning",
      handler: () => {
        const content = <GameBasedLearning />;
        const html = document.createElement('html');
        html.innerHTML = content;
        return html.outerHTML;
      },
      id: 1,
    },
    {
      text: "Experiential Learning",
      handler:() =>{
        const content = < ExperientialLearning/>;
        const html = document.createElement('html');
        html.innerHTML = content;
        return html.outerHTML;
    },
      id: 2,
    },
    {
      text: "Personal Development",
      handler:<PersonalDevelopment />,
      id: 3,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick= {window.open(option.handler)}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default MoreCourseOptions;
