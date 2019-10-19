import React from 'react';
import logo from './logo.svg';
import StartPage from './components/StartPage'
import Signup from './components/Signup'
import AuntyPrefs from './components/AuntyPrefs'
import MatchList from './components/MatchList'
import Chatbox from './components/Chatbox'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <StartPage />
      <Signup />
      <AuntyPrefs />
      <MatchList />
      <Chatbox />
    </div>
  );
}

export default App;
