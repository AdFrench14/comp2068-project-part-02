// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { Link } from "react-router-dom";

// function Index() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     Axios.get("/api/messages")
//       .then(result => setMessages(result.data)) 
//       .catch(err => console.error(err));
//   }, []);