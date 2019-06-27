import { Alert, Linking } from "react-native";

import URLActions from "../../app/helpers/URLActions";

const telno = "123456789";
const telnoURL = "telprompt:" + telno;
const smsURL = "sms:" + telno;

const email = "garygary@example.com";
const emailURL = "mailto:" + email;

const facetimeURL = "facetime:" + telno;

describe("URLActions", () => {
  beforeEach(() => {
    Linking.openURL = jest.fn();
    Linking.canOpenURL = jest.fn(() => new Promise(resolve => resolve(true)));
    Alert.alert = jest.fn();
  });

  it("triggers openUrl from makeCall with the correct url", () => {
    expect.assertions(2);

    URLActions.makeCall(telno);

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(telnoURL);
    });
  });

  it("triggers openUrl from makeCall with the correct url, when spaces are used", () => {
    expect.assertions(2);

    URLActions.makeCall(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(telnoURL);
    });
  });

  it("doesn't trigger makeCall if it isn't supported", () => {
    Linking.canOpenURL = jest.fn(() => new Promise(resolve => resolve(false)));
    expect.assertions(3);

    URLActions.makeCall(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Alert.alert).toBeCalled();
      expect(Linking.openURL).not.toBeCalled();
    });
  });

  it("triggers openUrl from sendText with the correct url", () => {
    expect.assertions(2);

    URLActions.sendText(telno);

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(smsURL);
    });
  });

  it("triggers openUrl from sendText with the correct url, when spaces are used", () => {
    expect.assertions(2);

    URLActions.sendText(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(smsURL);
    });
  });

  it("doesn't trigger sendText if it isn't supported", () => {
    Linking.canOpenURL = jest.fn(() => new Promise(resolve => resolve(false)));
    expect.assertions(3);

    URLActions.sendText(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Alert.alert).toBeCalled();
      expect(Linking.openURL).not.toBeCalled();
    });
  });

  it("triggers openUrl from sendEmail with the correct url", () => {
    expect.assertions(2);

    URLActions.sendEmail(email);

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(emailURL);
    });
  });

  it("triggers openUrl from sendEmail with the correct url, when spaces are used", () => {
    expect.assertions(2);

    URLActions.sendEmail(" " + email + " ");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(emailURL);
    });
  });

  it("doesn't trigger sendEmail if it isn't supported", () => {
    Linking.canOpenURL = jest.fn(() => new Promise(resolve => resolve(false)));
    expect.assertions(3);

    URLActions.sendEmail(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Alert.alert).toBeCalled();
      expect(Linking.openURL).not.toBeCalled();
    });
  });

  it("triggers openUrl from startFacetime with the correct url", () => {
    expect.assertions(2);

    URLActions.startFacetime(telno);

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(facetimeURL);
    });
  });

  it("triggers openUrl from startFacetime with the correct url, when spaces are used", () => {
    expect.assertions(2);

    URLActions.startFacetime(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Linking.openURL).toBeCalledWith(facetimeURL);
    });
  });

  it("doesn't trigger startFacetime if it isn't supported", () => {
    Linking.canOpenURL = jest.fn(() => new Promise(resolve => resolve(false)));
    expect.assertions(3);

    URLActions.startFacetime(" 12 34 56 78   9");

    return Promise.resolve().then(() => {
      expect(Linking.canOpenURL).toBeCalled();
      expect(Alert.alert).toBeCalled();
      expect(Linking.openURL).not.toBeCalled();
    });
  });
});
