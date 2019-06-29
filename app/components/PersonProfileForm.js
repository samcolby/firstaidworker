import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Button, View } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import FormSwitch from "./FormSwitch";
import FormTextField from "./FormTextField";

const UpdateWorkerSchema = Yup.object().shape({
  department: Yup.string()
    .min(1, "Too Short!")
    .max(100, "Too Long!")
    .required("It is Required"),
  email: Yup.string().email("Invalid email"),
  is_active: Yup.bool().required(),
  job_title: Yup.string()
    .min(1, "Too Short!")
    .max(100, "Too Long!"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(6, "Too short!")
    .max(20, "Too long!")
});

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
    person: PropTypes.object.isRequired,
    updateWorker: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = values => {
    this.props.updateWorker({
      variables: {
        id: this.props.person.id,
        changes: values
      }
    });
  };

  render() {
    const {
      // company: { name: companyName },
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
          // company: { name: companyName },
          department,
          email,
          name,
          is_active,
          job_title,
          phone
        }}
        onSubmit={this.handleSubmit}
        validationSchema={UpdateWorkerSchema}
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
              fieldName="company.name"
              formikProps={props}
              label="Company"
              autoCapitalize="words"
              keyboardType="default"
              textContentType="organizationName"
            />
            <FormTextField
              fieldName="department"
              formikProps={props}
              label="Department"
              autoCapitalize="words"
              keyboardType="default"
            />
            <FormTextField
              fieldName="job_title"
              formikProps={props}
              label="Job title"
              keyboardType="default"
              textContentType="jobTitle"
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
