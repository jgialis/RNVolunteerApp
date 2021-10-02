//LEAHS PAGE
//imports allow for the features of react native to be useable
import React, { Component } from "react";
//needed to import safeareaview and dimensions
import {
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
//importing flatlsist (I want to use a flatlist to store everything.)
//importing scrollview
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { homedata } from "../Components/HomeData";
import { eventdata, LoadEventData} from "../Components/myEvents";

class EventVolunteerScreen extends Component {
  state = {
    //this stuff inside is what makes the shade of blue slightly different
    backgroundColor: "rgba(0,0,200,0.05)",
    pressed: false,
  };
  //added a separator line
  renderSeparator = () => (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        height: 1,
      }}
    />
  );
  onEventAdded = (event) => {};
  LoadEventData = () => {};
  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.container}
      >
        <FlatList
          data={eventdata}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderSeparator}
          //keyExtractor={(item, index) => index.toString()}

          renderItem={({ item }) => {
            //console.log(item);
            return (
              <SafeAreaView style={styles.Container}>
                <TouchableOpacity
                  style={{
                    backgroundColor: this.state.backgroundColor,
                    width: Dimensions.get("screen").width,
                    height:
                      Dimensions.get("screen").height -
                      Dimensions.get("screen").height * 0.88,
                  }}
                  //onPress={() => console.log("PRESSED")}
                  onPress={() =>
                    this.props.navigation.navigate("EventVolDetails", { item })
                    
                  }
                >
                  <Text style={styles.name}>{item[0]} </Text>
                  <ScrollView>
                    <Text style={styles.desc}>{item[1]} </Text>
                  </ScrollView>
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
      </ImageBackground>
    );
  }
}
//const handles a lot of the frontend styling
const styles = StyleSheet.create({
  //if removed the background will dissapear
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  //img is defs neccessary or the screen will crash
  img: {
    fontSize: 20,
    fontWeight: "bold",
  },
  //name causes the titles of events to be bolded and centered
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 125,
    paddingTop: 8,
    paddingBottom: 20,
    paddingRight: 5,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.05,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.96,
    overflow: "hidden",
  },
  //added the scrolling features
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

export default EventVolunteerScreen;
