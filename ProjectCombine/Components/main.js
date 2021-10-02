import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index.js";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "../hooks/useCachedResources";
import useColorScheme from "../hooks/useColorScheme";
import Navigation from "../navigation";

import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../navigation/DrawerNavigator";
import NotFoundScreen from "../Screens/NotFoundScreen";

import { ProfileScreen } from "../Screens/ProfileScreen";

const Stack = createStackNavigator();
export class main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { currentUser } = this.props;

    // const isLoadingComplete = useCachedResources();
    // const colorScheme = useColorScheme();

    console.log(currentUser);
    if (currentUser == undefined) {
      return <View></View>;
    }
    return (
      <Stack.Navigator initialRouteName="root">
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(main);
