import './App.css';
import Homepage from './pages/Homepage';
import Places from './pages/Places';
import {Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/places' exact component={Places}/>
        <Redirect from='*' to='/'/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
