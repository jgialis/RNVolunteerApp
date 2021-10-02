import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import firebase from "firebase";
import "firebase/firestore";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

// import CheckBox from "react-native-check-box";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      color: "blue",
      backgroundColorVol: "rgba(0,0,200,0.05)",
      backgroundColorOrg: "rgba(0,0,200,0.05)",
      pressedO: false,
      pressedV: false,
      accountType: "",
      age: "",
      picture: " ",
      bio: " ",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name, age, accountType } = this.state;
    if (
      email != "" &&
      password != "" &&
      name != "" &&
      accountType != "" &&
      age != ""
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              email: email,
              password: password,
              name: name,
              age: age,
              accountType: accountType,
              picture: " ",
              myEvents: [],
              bio: " ",
            })
            .then()
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Alert.alert("Error", "Please enter all remaining fields.");
    }
  }

  // if (this.state.pressedV && this.state.pressedO) {
  //   console.log("ERROR! ONLY 1 type of account pls");
  // } else

  changeColorV() {
    if (!this.state.pressedV && !this.state.pressedO) {
      this.setState({
        pressedV: true,
        backgroundColorVol: "rgba(0,0,200,0.2)",
        accountType: "Volunteer",
      });
    } else {
      this.setState({
        pressedV: false,
        backgroundColorVol: "rgba(0,0,200,0.05)",
        accountType: "",
      });
    }
  }

  changeColorO() {
    if (!this.state.pressedO && !this.state.pressedV) {
      this.setState({
        pressedO: true,
        backgroundColorOrg: "rgba(0,0,200,0.2)",
        accountType: "Organizer",
      });
    } else {
      this.setState({
        pressedO: false,
        backgroundColorOrg: "rgba(0,0,200,0.05)",
        accountType: "",
      });
    }
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={{ flex: 1 }}
      >
        <DismissKeyboard>
          <SafeAreaView>
            <Text style={styles.signupTextContainer}>Sign Up</Text>
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

            <Text style={styles.textContainer}>Name</Text>
            <TextInput
              style={styles.textInputContainer}
              onChangeText={(name) => this.setState({ name })}
            ></TextInput>

            <Text style={styles.textContainer}>Age</Text>
            <TextInput
              style={styles.textInputContainer}
              onChangeText={(age) => this.setState({ age })}
            ></TextInput>

            <Text style={styles.textContainer}>Account Type</Text>

            <SafeAreaView style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  {
                    backgroundColor: this.state.backgroundColorVol,
                  },
                  styles.appButtonContainer1,
                ]}
                onPress={() => this.changeColorV()}
              >
                <Text style={styles.appButtonText1}>Volunteer</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                style={[
                  {
                    backgroundColor: this.state.backgroundColorOrg,
                  },
                  styles.appButtonContainer1,
                ]}
                onPress={() => this.changeColorO()}
              >
                <Text style={styles.appButtonText1}>Organizer</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <TouchableOpacity
              style={styles.appButtonContainer}
              activeOpacity={0.5}
              onPress={() => this.onSignUp()}
            >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </DismissKeyboard>
      </ImageBackground>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  textInputContainer: {
    width: 300,
    height: 35,
    fontSize: 20,
    color: "cornflowerblue",
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
    fontWeight: "900",
    marginLeft: 50,
    paddingTop: 40,
    fontFamily: "Verdana",
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
  appButtonContainer1: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 120,
    marginTop: 15,
    borderColor: "cornflowerblue",
    borderWidth: 1.5,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
  appButtonText1: {
    alignSelf: "center",
    color: "#3c8af7",
    fontSize: 20,
    fontWeight: "600",
  },
});
