import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

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
   <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <StartPage />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/prefs" render={() => <AuntyPrefs />} />
          <Route path="/matches" render={() => <MatchList />} />
          <Route path="/chat" render={() => <Chatbox />} />
        </Switch>
      </div>
   </Router>
  );
}

export default App;
