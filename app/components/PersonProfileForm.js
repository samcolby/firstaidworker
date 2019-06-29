import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Alert, Button, View } from "react-native";

import { Formik } from "formik";
import FormSwitch from "./FormSwitch";
import FormTextField from "./FormTextField";

/**
 * React Pure Component to display
 * The form used to edit a person's profile data.
 *
 * Edits the relevant data for the passed in person.
 *
 * @class PersonProfileForm
 * @extends {PureComponent}
 */
class PersonProfileForm extends PureComponent {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = values => {
    Alert.alert("Thevalues", JSON.stringify(values));
  };

  render() {
    const {
      company: { name: companyName },
      department,
      email,
      is_active,
      job_title,
      name,
      phone
    } = this.props.person;

    return (
      <Formik
        initialValues={{
          company: companyName,
          department,
          email,
          name,
          is_active,
          job_title,
          phone
        }}
        onSubmit={this.handleSubmit}
      >
        {props => (
          <View>
            <FormSwitch
              fieldName="is_active"
              formikProps={props}
              label="Available"
            />
            <FormTextField
              fieldName="name"
              formikProps={props}
              label="Name"
              autoCapitalize="words"
              autoComplete="name"
              keyboardType="default"
              textContentType="name"
            />
            <FormTextField
              fieldName="job_title"
              formikProps={props}
              label="Job title"
              keyboardType="default"
              textContentType="jobTitle"
            />
            <FormTextField
              fieldName="company"
              formikProps={props}
              label="Company"
              autoCapitalize="words"
              keyboardType="default"
              textContentType="organizationName"
            />
            <FormTextField
              fieldName="email"
              formikProps={props}
              label="Email"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <FormTextField
              fieldName="phone"
              formikProps={props}
              label="Phone"
              autoComplete="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
            />
            <Button onPress={props.handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    );
  }
}

export default PersonProfileForm;
