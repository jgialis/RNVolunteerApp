import firebase from "../fb.js";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import { getNotification } from "../api/NotificationsAPI.js";
import OrangeBanner from "../Components/OrangeBanner";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;

export default class NotificationScreen extends React.Component {
  state = {
    notificationList: [],
    currentNotification: null,
    backgroundColorNotification: "rgba(0,0,200,0.05)",
    pressed: false,
  };

  renderSeparator = () => (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        height: 1,
      }}
    />
  );

  onNotificationReceived = (notificationList) => {
    this.setState((prevState) => ({
      notificationList: (prevState.notificationList = notificationList),
    }));
  };

  componentDidMount() {
    getNotification(this.onNotificationReceived);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.background}
      >
        <OrangeBanner title="Activity" />
        <FlatList
          data={this.state.notificationList}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={styles.notificationContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => this.changeColor()}
                  style={{
                    backgroundColor: this.state.backgroundColorNotification,
                  }}
                >
                  <Text style={styles.messageContainer}>{item.message}</Text>
                  <Text style={styles.timeContainer}>
                    {moment(item.time).fromNow()}
                  </Text>
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  notificationContainer: {
    width: windowWidth,
    borderWidth: 0,
    borderColor: "dodgerblue",
  },
  messageContainer: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 120,
    color: "#2468f6",
    fontWeight: "600",
  },
  timeContainer: {
    fontSize: 17,
    marginLeft: 120,
    marginTop: 20,
    color: "#75a9f9",
    marginBottom: 10,
  },
});
