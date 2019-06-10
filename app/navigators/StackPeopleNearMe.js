import { createStackNavigator } from "react-navigation";

import { ScreenPeopleNearMe, ScreenPerson } from "../screens";

import { COLORS, ROUTES } from "../Constants";

const StackPeopleNearMe = createStackNavigator(
  {
    [ROUTES.SCREEN.PEOPLE_NEAR_ME]: ScreenPeopleNearMe,
    [ROUTES.SCREEN.PERSON]: ScreenPerson
  },
  {
    initialRouteName: ROUTES.SCREEN.PEOPLE_NEAR_ME,
    navigationOptions: {
      headerTintColor: COLORS.NAV_HINTS
    }
  }
);

export default StackPeopleNearMe;
