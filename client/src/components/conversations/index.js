import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    Axios.get("/api/conversations")
      .then(result => setConversations(result.data)) 
      .catch(err => console.error(err));
  }, []);

  //console.log(conversations[0].users[0]);

  
  //for (let i = 0; i < conversations.length; i ++) {
  //  console.log(conversations[i].users[1].firstName);
  //}
  //debugger
  //console.log((conversations && conversations[0].users)); 
  //console.log(conversations[1].users);
  if(conversations.length != 0){
    return (
    <div className="container">
      <header>
        <h1> ChitChat </h1>
      </header>
        <Link to={`/conversations/new/`}>New Conversation</Link>
      <div className="backdiv">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Participants</th>
              <th>Latest Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody> 
            <tr>
              <td>{conversations[0].users[0].firstName}</td>
              <td>
              <Link to={`/conversations/${conversations._id}`}>open</Link>|
                      <Link to={`/conversations/${conversations._id}/destroy`}>delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
        }
  return null;
}

export default Index; 