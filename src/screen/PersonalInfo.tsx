import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; // Add this import to handle loading
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";

{
  /*
This page should be the page that will fill in the remaining user information 
using text boxes and multiple choice options. The page should update dynamically 
to make for an interactive and appealing user interface, it should also have some 
sort of animations when clicking between buttons and upon submission should 
change the user firstLogin variable to false.
*/
}

const PersonalInfo = () => {
  const [edu, setEdu] = useState("");
  const [institution, setInstitution] = useState("");
  const [employed, setEmployed] = useState("");
  const [org, setOrg] = useState("");
  const [roll, setRoll] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const navigation = useNavigation();

  const [loaded] = useFonts({
    CustomFont: require("../assets/fonts/LexendGiga-VariableFont_wght.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/mainPageBG.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.pageTitle}>
        <Text style={styles.titleText}>ACCOUNT INFO</Text>
        <View style={styles.overlay}>
          <View style={styles.TextInputContainer}>
            <FontAwesome6
              name="user-graduate"
              size={24}
              color="#2c2c2c"
              style={styles.IconStyling}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Education"
              onChangeText={(edu) => setEdu(edu)}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <FontAwesome5
              name="school"
              size={20}
              color="#2c2c2c"
              style={styles.IconStyling}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Institution"
              onChangeText={(institution) => setInstitution(institution)}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <FontAwesome6
              name="map-location"
              size={24}
              color="#2c2c2c"
              style={styles.IconStyling}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="City, Country"
              onChangeText={(location) => setLocation(location)}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <Entypo
              name="linkedin"
              size={24}
              color="#2c2c2c"
              style={styles.IconStyling}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="LinkedIn Profile"
              onChangeText={(linkedIn) => setLinkedIn(linkedIn)}
            />
          </View>

          <View style={styles.TextInputContainer}>
            <AntDesign
              name="github"
              size={24}
              color="#2c2c2c"
              style={styles.IconStyling}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="GitHub Profile"
              onChangeText={(github) => setGithub(github)}
            />
          </View>
          <View>
            <Text style={styles.employmentText}>
              Are you currently employed?
            </Text>
          </View>

          <View style={styles.signInButtonContainer}>
            <TouchableOpacity>
              <LinearGradient
                colors={["#A681FF", "#5D4BFF"]}
                style={styles.button}
              >
                <Text style={styles.YNButton}>Yes</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                colors={["#A681FF", "#5D4BFF"]}
                style={styles.button}
              >
                <Text style={styles.YNButton}>No</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Makes the image cover the entire container
    resizeMode: "cover", // Ensures the image scales correctly
    height: "100%",
    width: "100%",
  },

  pageTitle: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  overlay: {
    flex: 1,
    paddingTop: "5%",
    alignItems: "center", // Centers the text horizontally
  },
  titleText: {
    fontSize: 45,
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    textAlign: "center",
    paddingBottom: "1%",
  },
  TextInput: {
    flex: 1, // Fills the remaining space in the container
    fontSize: 16,
    color: "#000",
  },

  TextInputContainer: {
    flexDirection: "row",
    alignItems: "center", // Ensures all children are vertically centered
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 20,
    marginVertical: 15,
    width: "65%",
    paddingHorizontal: 10, // Adds space inside the container for content
    height: 40,
  },

  IconStyling: {
    marginHorizontal: 10,
    alignSelf: "center",
  },

  signInButtonContainer: {
    flex: 1,
    elevation: 20,
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 10,
    width: 80,
    justifyContent: "center",
  },

  YNButton: {
    fontFamily: "CustomFont",
    color: "#ffffff",
    fontSize: 20,
    elevation: 20,
  },

  employmentText: {
    marginVertical: 10,
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    fontSize: 15,
    elevation: 20,
  },
});
