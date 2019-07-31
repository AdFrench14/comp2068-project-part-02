import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import io from 'socket.io-client';

function ChatWindow() {
  //Create a state object to hold all of the messages
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    Axios.get(`/api/conversation/${props.match.params.id}`) //url is just a placeholder until we get the api working
        .then(result => setMessages(result)) //the data format will depend on how we send it through the API endpoint
        .catch(err => console.error(err));
  }, []); //only run once, to get the initial state of the conversation

  const socket = io(endpoint); //endpoint is the url that this socket will connect to. Might be able to use window.location, which is the default
  socket.on("chat message", msg => messages.append(msg)); //receives msg from the event, and should append it to the messages list

  //Bethany and Allie. You can use the messages array to populate the view with all the chat messages

  return (
      <div>
          <p>Testing Chat Window Element</p>
      </div>
      );
}

export default ChatWindow;
