import React from 'react';
import SignIn from './components/auth/SignIn';
import HomePage from './components/home/HomePage';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/home" component={HomePage}/>
      </Switch>
    </>
  );
}

export default App;