import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPageHoc from '../components/pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPageHoc} />
      </Switch>
    </BrowserRouter>
  )
}

export default App