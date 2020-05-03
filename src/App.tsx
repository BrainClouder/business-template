import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={`/home`} exact component={() => <Home/>} />
      <Route path={`/login`} exact component={() => <Login/>} />
      <Route path="" component={() => <Redirect to={"/home"} /> } />
    </Switch>
  );
}

export default App;
