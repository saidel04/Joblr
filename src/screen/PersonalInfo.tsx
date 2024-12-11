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
  const [employed, setEmployed] = useState("");
  const [org, setOrg] = useState("");
  const [roll, setRoll] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
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
        <Text style={styles.signUpText}>ACCOUNT INFO</Text>
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
  signUpText: {
    fontSize: 45,
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    textAlign: "center",
  },
});
