import React from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import MainNav from './components/MainNav';

function App() {
  return (
    <div>
    <MainNav></MainNav>
    <ChatWindow></ChatWindow>
    </div>
  );
}

export default App;
