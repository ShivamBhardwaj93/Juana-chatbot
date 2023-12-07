class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }


    greet() {
        const greetingMessage = this.createChatBotMessage('How could I help you today? Please select among the following options for me to assist you better',
        {
            widget:"BaseOptions",
        }
        )
        this.updateChatbotState(greetingMessage)
    }

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.


        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }


    handleCourse = () => {
        const message = this.createChatBotMessage(
          "Fantastic, Please tell me about what kind/name of course you are asking for:",
          {
            widget: "CertainCourse",
          }
        );
    
        this.updateChatbotState(message);
      };
    handleStore = () => {
        const message = this.createChatBotMessage(
            "redirecting you to the Stores page"
        )
        this.updateChatbotState(message);
    }
     


    //implement till here
}


export default ActionProvider;