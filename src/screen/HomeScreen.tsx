import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; // Add this import to handle loading
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = () => {
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
        <Text style={styles.signUpText}>HOME SCREEN</Text>
      </View>
    </View>
  );
};

export default SignupScreen;

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
  },
  signUpText: {
    fontSize: 60,
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    textAlign: "center",
  },
});
