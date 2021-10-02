import * as React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Linking,
} from "react-native";
import { floor } from "react-native-reanimated";

import EditScreenInfo from "../Components/EditScreenInfo";
import { Text, View } from "../Components/Themed";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AboutScreen() {
  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require("../assets/aboutPhoto.jpeg")}
          style={{ height: windowHeight * 0.275, width: windowWidth }}
        ></Image>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 2, alignItems: "center" }}>
        <Text style={styles.visionText}>Our Vision</Text>
        <SafeAreaView
          style={{
            // borderLeftWidth: 5,
            // borderRightWidth: 5,
            borderColor: "dodgerblue",
            width: windowWidth * 0.95,
            // borderRadius: 50,
          }}
        >
          <Text style={styles.missionText}>
            {"\n"}Equity is the foundation of our work. {"\n\n"}From our
            engagement with donors to our investment of community resources to
            our interactions with the public, it defines who we are and informs
            everything that we do. We define equity as the presence of justice
            and fairness within the procedures, processes and distribution of
            resources by institutions or systems. We commit to equity as a core
            value and practice in order to advance our mission of connecting
            people, resources and organizations to create a thriving community
            for everyone.{"\n"}
          </Text>
        </SafeAreaView>
        <Text style={styles.missionText}>{"\n"}Visit us at</Text>
        <Text
          style={styles.linkText}
          onPress={() => Linking.openURL("http://unitedwaymerced.org")}
        >
          www.unitedwaymerced.org
        </Text>
        <Text style={styles.missionText}>For more information</Text>
        <Image
          style={styles.logoContainer}
          source={require("../assets/UWMClogo.png")}
        />
        <Text style={styles.uwmcText}>UNITED WAY OF MERCED COUNTY</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    position: "absolute",
    top: 0,
  },
  logoContainer: {
    height: 120,
    width: 120,
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
  },
  visionText: {
    fontSize: 45,
    fontWeight: "900",
    color: "#144e95",
    fontFamily: "Palatino",
    textAlign: "center",
    textDecorationLine: "underline",
    shadowOpacity: 0.2,
    padding: 10,
  },
  missionText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#144e95",
    textAlign: "center",
    shadowOpacity: 0.2,
    fontFamily: "Palatino",
    marginRight: 5,
    marginLeft: 5,
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "tomato",
    textAlign: "center",
    shadowOpacity: 0.2,
    fontFamily: "Palatino",
  },
  uwmcText: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    color: "#144e95",
    fontWeight: "800",
    textAlign: "center",
  },
});

/*

 <SafeAreaView style={styles.containerImage}>
        <Image
          source={require("../assets/aboutPhoto.jpeg")}
          style={{ resizeMode: "contain", width: windowWidth }}
        ></Image>
      </SafeAreaView>
      <SafeAreaView style={styles.containerText}>
        <SafeAreaView style={{ padding: 40 }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "900",
              color: "#144e95",
              fontFamily: "Palatino",
              textAlign: "center",
              textDecorationLine: "underline",
              shadowOpacity: 0.2,
            }}
          >
            Our Vision
          </Text>
        </SafeAreaView>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: "#144e95",
            textAlign: "center",
            shadowOpacity: 0.2,
            fontFamily: "Palatino",
          }}
        >
          {"\n\n"} Equity is the foundation of our work. {"\n\n"}From our
          engagement with donors to our investment of community resources to our
          interactions with the public, it defines who we are and informs
          everything that we do. We define equity as the presence of justice and
          fairness within the procedures, processes and distribution of
          resources by institutions or systems. We commit to equity as a core
          value and practice in order to advance our mission of connecting
          people, resources and organizations to create a thriving community for
          everyone.{"\n\n"}Visit us at
        </Text>
        <Text
          style={{
            fontWeight: "300",
            color: "#144e95",
            textAlign: "center",
            shadowOpacity: 0.2,
            fontFamily: "Palatino",
          }}
          onPress={() => Linking.openURL("http://unitedwaymerced.org")}
        >
          www.unitedwaymerced.org {"\n"}
          for more information
        </Text>
      </SafeAreaView>
      <Image
        style={styles.logoContainer}
        source={require("/Users/JoshGialis/Desktop/CSE LOCAL 120/CSE120/ProjectCombine/assets/UWMClogo.png")}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 0,
          marginBottom: 20,
          color: "#144e95",
          fontFamily: "serif",
          fontWeight: "800",
        }}
      >
        UNITED WAY OF MERCED COUNTY
      </Text>
*/
