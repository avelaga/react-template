import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import './App.css';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> 404: Page Not Found</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
