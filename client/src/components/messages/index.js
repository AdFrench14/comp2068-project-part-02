import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Axios.get("/api/messages")
      .then(result => setMessages(result.data)) 
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="user"> ChitChat </h1>
      </header>
      <div className="box left">
        <table className="table table-striped convo">
          <tbody> {conversation.messages.map(message =>(
            <tr className="message-row" key={message._id}>
              <td className="user-name">{message.user.firstName}{message.user.lastName}</td>
            </tr>
            ))}
            <tr>
              <td className="user-container">{message.content}</td>
              <ul className="nav flex-column">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">...</a> 
                  <div className="dropdown-menu">
                      <Link to={`/messages/${conversation._id}/${message.id}/edit}`}>edit</Link>|
                      <Link to={`/messages/${conversation._id}/destroy`}>delete</Link>
                  </div>
                </li>
              </ul>
            </tr>
          </tbody>
        </table>
        <div className="box right bg-dark">
            <table className="table table-striped user">
              <thead>
                <tr>
                  <th className="chatter">Chatter Participants</th>
                </tr>
              </thead>
              <tbody>{conversation.users.map(users =>(
                <tr className="message-row" key={user._id}>
                  <td className="user-name side">{user.firstName}{user.lastName}</td>
                </tr>
              ))}
              </tbody>
            </table>
        </div>
      </div>  
      
    </div>

  )
}

export default Index; 