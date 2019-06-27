import { Alert, Linking } from "react-native";

class URLActions {
  static makeCall(number) {
    const url = "telprompt:" + number.replace(/ /g, "");

    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        Alert.alert("Sorry, we're unable to make calls on this device.");
      } else {
        Linking.openURL(url);
      }
    });
  }

  static sendText(number) {
    const url = "sms:" + number.replace(/ /g, "");

    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        Alert.alert("Sorry, we're unable to send texts on this device.");
      } else {
        Linking.openURL(url);
      }
    });
  }

  static sendEmail(emailaddress) {
    const url = "mailto:" + emailaddress.replace(/ /g, "");

    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        Alert.alert("Sorry, we're unable to send emails on this device.");
      } else {
        Linking.openURL(url);
      }
    });
  }

  static startFacetime(facetimeId) {
    const url = "facetime:" + facetimeId.replace(/ /g, "");

    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        Alert.alert(
          "Sorry, we're unable to start facetime calls on this device."
        );
      } else {
        Linking.openURL(url);
      }
    });
  }
}

export default URLActions;
