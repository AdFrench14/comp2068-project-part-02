import React, { useState, useEffect } from "react";
import Axios from "axios";

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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Index; 