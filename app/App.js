import React from "react";
import { createAppContainer } from "react-navigation";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import env from "../env.json";

import { BottomNavigator } from "./navigators";

const AppContainer = createAppContainer(BottomNavigator);

const apolloClient = new ApolloClient({
  uri: env.uri,
  headers: {
    "x-hasura-access-key": env.hasura_access_key
  }
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

export default App;
