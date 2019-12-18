import React from "react";
import { Menu, } from "semantic-ui-react"; 
import { UserConsumer, } from "../providers/UserProvider"; 
import { Link, withRouter, } from "react-router-dom"; 

const Navbar = (props) => {

  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
      <Menu.Menu position="right">
        <Menu.Item 
        name="logout"
        onClick={() => auth.handleLogout(props.history)}
        />
      </Menu.Menu>
      )
    }
    else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item name="login"
            active={props.location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item name="register"
            active={props.location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

    return (
      <>
        <UserConsumer>
          {auth => 
            <Menu pointing secondary>
              <Link to="/">
                <Menu.Item 
                  name="home"
                  id="home"
                  active={props.location.pathname === "/"}
                />
              </Link>
                { rightNavItems(auth) }
            </Menu>
          }
        </UserConsumer>
      </>
    );
  };


export default withRouter(Navbar); 