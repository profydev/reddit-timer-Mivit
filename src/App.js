import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        App Placeholder

      </div>
      <Switch>
        <Route path="/search">
          <div />
        </Route>
        <Route path="/">
          <div />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
