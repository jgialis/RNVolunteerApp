import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import firebase from "./../fb.js";
import Logo from "../Components/Logo";

import { Formik } from "formik";

import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import ErrorMessage from "../Components/ErrorMessage";
import { TouchableOpacity } from "react-native-gesture-handler";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class ForgotPassword extends Component {
  handlePasswordReset = async (value, actions) => {
    const { email } = value;
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert(
        "Confirmation!",
        "Please Check your Email to Reset your Password"
      );
      this.props.navigation.navigate("Login");
    } catch (error) {
      actions.setFieldError("general", error.message);
      Alert.alert("ERROR", "Please Enter a Valid Email Address.");
    }
  };

  onSubmit = (values, actions) => {
    this.handlePasswordReset(values, actions);
  };

  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/background2.png")}
      >
        <DismissKeyboard>
          <SafeAreaView style={styles.container}>
            <Logo></Logo>
            <Formik initialValues={{ email: "" }} onSubmit={this.onSubmit}>
              {({ handleChange, values, handleSubmit, errors, touched }) => (
                <SafeAreaView>
                  <FormInput
                    name="email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholder="Email"
                    iconName="ios-mail"
                    iconColor="cornflowerblue"
                    color="#02448d"
                  />
                  {/* <ErrorMessage errorValue={touched.email && errors.email} /> */}
                  <SafeAreaView style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.appButtonContainer}
                      activeOpacity={0.5}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.appButtonText}>Send Email</Text>
                    </TouchableOpacity>
                  </SafeAreaView>
                  {/* <ErrorMessage errorValue={errors.general} /> */}
                </SafeAreaView>
              )}
            </Formik>
          </SafeAreaView>
        </DismissKeyboard>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 300,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
});

// <TouchableOpacity
// style={styles.appButtonContainer}
// activeOpacity={0.5}
// onPress={() => this.onSignIn()}
// >

// <FormButton
// buttonType="outline"
// onPress={handleSubmit}
// title="Send Email"
// buttonColor="#ffb4b0"
// // disabled={!isValid || isSubmitting}
// />
