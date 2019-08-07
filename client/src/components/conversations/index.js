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
          <tbody> {conversations.map(conversation =>(
            <tr key={conversation._id}>
              <td>{conversation.users.firstName} {conversation.users.lastName}</td>
              <td>
              <Link to={`/conversations/${conversation._id}`}>open</Link>|
                      <Link to={`/conversations/${conversation._id}/destroy`}>delete</Link>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Index; 