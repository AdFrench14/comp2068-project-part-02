import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [blogs, setBlogs] = useState([]);

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

      <div>
        <table className="table table-striped">

          
        </table>
      </div>
    </div>
  )
}

export default Index; 