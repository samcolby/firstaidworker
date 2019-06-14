import { createStackNavigator } from "react-navigation";

import { ScreenSettings, ScreenSettingsDetails } from "../screens";

import { COLORS, ROUTES } from "../Constants";

const StackSettings = createStackNavigator(
  {
    [ROUTES.SCREEN.SETTINGS]: ScreenSettings,
    [ROUTES.SCREEN.SETTINGS_DETAILS]: ScreenSettingsDetails
  },
  {
    initialRouteName: ROUTES.SCREEN.SETTINGS,
    defaultNavigationOptions: {
      headerTintColor: COLORS.NAV_HINTS
    }
  }
);

export default StackSettings;
