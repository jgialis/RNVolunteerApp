import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { addEvent, eventList, myEventList } from "../api/EventAPI";
import { Text } from "../Components/Themed";

class Events extends Component<{}, any> {
  state = {
    name: null,
    desc: null,
    location: null,
    time: null,
    contactinfo: null,
    //eventList: [],
    backgroundColor: "rgba(0,0,200,0.05)",
  };

  renderSeparator = () => (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        height: 1,
      }}
    />
  );

  onEventAdded = (event) => {
    console.log("Event Added");
    console.log(event);
    this.setState((prevState) => ({
      eventList: [...prevState.eventList, event],
    }));
  };

  onEventReceived = (eventList) => {
    this.setState((prevState) => ({
      eventList: (prevState.eventList = eventList),
    }));
  };

  componentDidMount() {
    myEventList(this.onEventReceived);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.container}
      >
        <SafeAreaView style={{ position: "absolute", top: 0, marginTop: 20 }}>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 100,
              // position: "absolute",
              // top: 0,
              marginTop: 50,
              color: "dodgerblue",
              textAlign: "center",
            }}
          >
            Add
          </Text>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 30,
              // position: "absolute",
              // top: 0,
              textAlign: "center",
              color: "dodgerblue",
            }}
          >
            an event to your
          </Text>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 50,
              // position: "absolute",
              // top: 0,
              textAlign: "center",
              color: "dodgerblue",
            }}
          >
            community.
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{ marginTop: 200 }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Event Name:"
            value={this.state.name}
            onChangeText={(text) => (this.state.name = text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Event Description:"
            value={this.state.desc}
            onChangeText={(text) => (this.state.desc = text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Event Location:"
            value={this.state.location}
            onChangeText={(text) => (this.state.location = text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Event Time:"
            value={this.state.time}
            onChangeText={(text) => (this.state.time = text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Contact Information:"
            value={this.state.contactinfo}
            onChangeText={(text) => (this.state.contactinfo = text)}
          />
          <Button
            title="Create Event"
            onPress={() =>
              addEvent(
                {
                  name: this.state.name,
                  desc: this.state.desc,
                  location: this.state.location,
                  time: this.state.time,
                  contactinfo: this.state.contactinfo,
                },
                this.onEventAdded,
                Alert.alert("Event added.")
              )
            }
          />

          {/* <FlatList
             data={eventList}
             ItemSeparatorComponent={this.renderSeparator}
             ListFooterComponent={this.renderSeparator}
             renderItem={({ item }) => {
              return (
                <SafeAreaView style={styles.container}>
                <TouchableOpacity
                  style={{
                    backgroundColor: this.state.backgroundColor,
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height-(Dimensions.get('screen').height*.88),
                  }}
                >
                  <Text style={styles.name} >{item[0]} </Text>
                  <Text style={styles.desc} >{item[1]} </Text> 
                </TouchableOpacity>
              </SafeAreaView>
              );
            }
            }
          /> */}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  containerInfo: {
    marginTop: 10,
  },
  TextInput: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 125,
    paddingTop: 8,
    paddingBottom: 5,
    paddingRight: 5,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.05,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.96,
    overflow: "hidden",
  },
  desc: {
    fontSize: 15,
    fontWeight: "normal",
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.05,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.88,
    paddingLeft: 125,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    overflow: "scroll",
  },
});

export default Events;