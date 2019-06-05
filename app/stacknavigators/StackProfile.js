import { createStackNavigator } from "react-navigation";

import { ScreenProfile } from "../screens";

import { COLOURS, ROUTES } from "../Constants";

const StackProfile = createStackNavigator(
  {
    [ROUTES.SCREEN.PROFILE]: ScreenProfile
  },
  {
    initialRouteName: ROUTES.SCREEN.PROFILE,
    navigationOptions: {
      headerTintColor: COLOURS.NAV_HINTS
    }
  }
);

export default StackProfile;
