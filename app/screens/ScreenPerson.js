import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";
import { SafeAreaView, ScrollView } from "react-navigation";

import QueryPerson, { QUERY_PERSON_DATA } from "../apis/QueryPerson";

import URLActions from "../helpers/URLActions";

import {
  LoadingScreen,
  PersonHeaderCard,
  PersonDataItem,
  StaticMap
} from "../components";

import { COLORS, NAVIGATOR_PARAMS } from "../Constants";

class ScreenPerson extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam(NAVIGATOR_PARAMS.PERSON).name
    };
  };

  render() {
    const person = this.props.navigation.getParam(NAVIGATOR_PARAMS.PERSON);
    const { id } = person;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <QueryPerson id={id}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            const person = data[QUERY_PERSON_DATA][0];
            const { company, department, email, phone, location } = person;

            return (
              <ScrollView>
                <PersonHeaderCard person={person} />
                {company.name && (
                  <PersonDataItem
                    icon="ios-business"
                    iconType="ionicon"
                    title="Company"
                    value={company.name}
                  />
                )}
                {department && (
                  <PersonDataItem
                    icon="sitemap"
                    iconType="font-awesome"
                    title="Dept"
                    value={department}
                  />
                )}
                {email && (
                  <PersonDataItem
                    icon="ios-mail"
                    iconType="ionicon"
                    onPress={() => URLActions.sendEmail(email)}
                    title="Email"
                    value={email}
                  />
                )}
                {phone && (
                  <PersonDataItem
                    icon="ios-phone-portrait"
                    iconType="ionicon"
                    onPress={() => URLActions.makeCall(phone)}
                    title="Phone"
                    value={phone}
                  />
                )}
                {location && (
                  <StaticMap
                    latitude={location.coordinates[0]}
                    longitude={location.coordinates[1]}
                  />
                )}
              </ScrollView>
            );
          }}
        </QueryPerson>
      </SafeAreaView>
    );
  }
}

export default ScreenPerson;
