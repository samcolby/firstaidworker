import React from "react";
import { createAppContainer } from "react-navigation";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import env from "../env.json";
import { GeolocationProvider } from "./contexts/GeolocationContext";


import { BottomNavigator } from "./navigators";

const AppContainer = createAppContainer(BottomNavigator);

const apolloClient = new ApolloClient({
  uri: env.api_uri,
  headers: {
    [env.api_access_key_header]: env.api_access_key
  }
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <GeolocationProvider>
          <AppContainer />
        </GeolocationProvider>
      </ApolloProvider>
    );
  }
}

export default App;
