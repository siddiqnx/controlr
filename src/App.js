import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Rooms } from 'pages/Rooms/Rooms';
import { Usage } from 'pages/Usage/Usage';
import { Rules } from 'pages/Rules/Rules';
import { Events } from 'pages/Events/Events';
import { Navbar } from 'components/Navbar/Navbar';
import { Login } from 'pages/Login/Login';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => setAuthenticated(true);
  return (
    <>
      {!authenticated ?
        <Login authenticate={authenticate} /> :
        <Router>
          <Switch>

            <Route path="/rooms">
              <Rooms />
            </Route>
            <Route path="/usage">
              <Usage />
            </Route>
            <Route path="/rules">
              <Rules />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
          <Navbar />
        </Router>
      }
    </>
  );
}

export default App;
