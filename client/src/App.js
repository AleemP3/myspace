import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from './components/FetchUser';
import Friends from "./components/Friends"; 
import ProtectedRoute from "./components/ProtectedRoute"; 
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <Container>
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my_friends" component={Friends} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </Container>
  </>
)

export default App;
