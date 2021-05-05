import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Views/Home';
// import Game from './Views/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/games/:id">
            <Game />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
