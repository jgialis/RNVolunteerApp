import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import firebase from "firebase";
import Logo from "../Components/Logo";
import { addEventListener } from "expo-linking";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        Alert.alert(
          "ERROR",
          "Incorrect username/password. \nPlease try again."
        );
        console.log(error);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={{ flex: 1 }}
      >
        <DismissKeyboard>
          <SafeAreaView>
            <Logo></Logo>
            <Text style={styles.signupTextContainer}>Sign In</Text>
            <Text style={styles.signupTextContainer1}>
              Hi there! Nice to see you again.
            </Text>

            <Text style={styles.textContainer}>Email</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textInputContainer}
              onChangeText={(email) => this.setState({ email })}
            ></TextInput>
            <Text style={styles.textContainer}>Password</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textInputContainer}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            ></TextInput>

            <TouchableOpacity
              style={styles.appButtonContainer}
              activeOpacity={0.7}
              onPress={() => this.onSignIn()}
            >
              <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>

            {/* <Button onPress={() => this.onSignIn()} title="Sign In" /> */}

            <SafeAreaView style={{ marginTop: 40 }} />
            <Button
              title="Forgot Password?"
              color="cornflowerblue"
              style={{ paddingHorizontal: 20 }}
              onPress={() => {
                this.props.navigation.navigate("ForgotPassword");
              }}
            />
          </SafeAreaView>
        </DismissKeyboard>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: 300,
    height: 35,
    fontSize: 20,
    color: "#02448d",
    borderBottomWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 255, 0)",
    marginLeft: 50,
  },
  textContainer: {
    color: "cornflowerblue",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 50,
    paddingTop: 40,
  },
  signupTextContainer: {
    color: "cornflowerblue",
    fontSize: 30,
    fontFamily: "Verdana",
    fontWeight: "900",
    marginLeft: 50,
    paddingTop: 40,
  },
  signupTextContainer1: {
    color: "cornflowerblue",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 50,
    paddingTop: 20,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 300,
    marginTop: 80,
    shadowOpacity: 0.1,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
});

export default Login;
