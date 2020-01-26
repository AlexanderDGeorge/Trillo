import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from "../../graphql/queries";
import Logout from './logout';

function NavBar() {
  const { data } = useQuery(IS_LOGGED_IN);
  if (data.isLoggedIn) {
    return (
      <Logout/> 
    )
  } else { 
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }
}

export default NavBar;
