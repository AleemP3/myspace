import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { UserConsumer, } from "../providers/UserProvider";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <UserConsumer>
    { auth => {
      return(
        <Route 
          { ...rest }
          render={ props => (
            auth.authenticated ? 
              <Component {...props} /> 
            : 
              <Redirect to={{pathname: "/login"}} /> 
          )}
        />
      )}}
  </UserConsumer>
);

export default ProtectedRoute;