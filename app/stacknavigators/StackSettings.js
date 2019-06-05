import { createStackNavigator } from "react-navigation";

import { ScreenSettings, ScreenSettingsDetails } from "../screens";

import { COLOURS, ROUTES } from "../Constants";

const StackSettings = createStackNavigator(
  {
    [ROUTES.SCREEN.SETTINGS]: ScreenSettings,
    [ROUTES.SCREEN.SETTINGS_DETAILS]: ScreenSettingsDetails
  },
  {
    initialRouteName: ROUTES.SCREEN.SETTINGS,
    navigationOptions: {
      headerTintColor: COLOURS.NAV_HINTS
    }
  }
);

export default StackSettings;
