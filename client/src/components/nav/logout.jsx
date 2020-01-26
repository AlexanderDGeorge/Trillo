import React from 'react';
import { ApolloConsumer } from "react-apollo";

function Logout(){
  return (
    <ApolloConsumer>{client => (
      <button
        onClick={e => {
          e.preventDefault();
          localStorage.removeItem("auth-token");
          client.writeData({ data: { isLoggedIn: false } });
        }}
      >
        Logout
      </button>
    )}
    </ApolloConsumer>
  );
}

export default Logout;