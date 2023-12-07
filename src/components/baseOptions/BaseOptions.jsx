import React from "react";

import "./Options.css";

const BaseOptions = (props) => {
  const options = [
    { text: "A Certain kind of Course", handler: props.actionProvider.handleCourse, id: 1 },// handle game based learning // experiential learning // personal development
    { text: "Store", handler: props.actionProvider.handleStore, id: 3 },
    { text: "About Instructors", handler: props.actionProvider.handleInstructor, id: 4 },
    { text: "I don't see anything here", handler: props.actionProvider.handleForum, id: 5 },
    { text: "help us improve", handler: props.actionProvider.handle, id: 6 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default BaseOptions;

