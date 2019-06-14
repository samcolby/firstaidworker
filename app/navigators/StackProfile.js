import { createStackNavigator } from "react-navigation";

import { ScreenProfile } from "../screens";

import { COLORS, ROUTES } from "../Constants";

const StackProfile = createStackNavigator(
  {
    [ROUTES.SCREEN.PROFILE]: ScreenProfile
  },
  {
    initialRouteName: ROUTES.SCREEN.PROFILE,
    defaultNavigationOptions: {
      headerTintColor: COLORS.NAV_HINTS
    }
  }
);

export default StackProfile;
