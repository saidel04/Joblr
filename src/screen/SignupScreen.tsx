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
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.pageTitle}>
        <Text style={styles.signUpText}>SIGN UP</Text>
        <Text style={styles.subheadingText}>
          Create an account to get started
        </Text>
        <View style={styles.emailEntryContainer}>
          <AntDesign
            name="mail"
            size={24}
            color="#2c2c2c"
            style={styles.emailIcon}
          />
          <TextInput placeholder="Email" style={styles.emailEntry} />
        </View>
        <View style={styles.emailEntryContainer}>
          <AntDesign
            name="user"
            size={24}
            color="#2c2c2c"
            style={styles.emailIcon}
          />
          <TextInput placeholder="Username" style={styles.emailEntry} />
        </View>
        <View style={styles.emailEntryContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="#2c2c2c"
            style={styles.emailIcon}
          />
          <TextInput
            placeholder="Password"
            style={styles.emailEntry}
            secureTextEntry
          />
        </View>
        <View style={styles.emailEntryContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="#2c2c2c"
            style={styles.emailIcon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.emailEntry}
            secureTextEntry
          />
        </View>

        <View style={styles.signUpButtonContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#D9A7FF", "#A681FF", "#5D4BFF"]}
              style={styles.button}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    paddingTop: "40%",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 60,
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    textAlign: "center",
  },
  subheading: {
    flex: 1,
  },
  subheadingText: {
    fontSize: 14,
    fontFamily: "CustomFont",
    textAlign: "center",
    paddingBottom: "5%",
  },
  emailIcon: {
    marginRight: 10,
  },
  emailEntryContainer: {
    flexDirection: "row",
    alignItems: "center", // Ensures all children are vertically centered
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 20,
    marginVertical: 20,
    width: "65%",
    paddingHorizontal: 10, // Adds space inside the container for content
    height: 40,
  },
  emailEntry: {
    backgroundColor: "#ffffff",
    width: "65%",
    borderRadius: 20,
    flex: 1, // Fills the remaining space in the container
    fontSize: 16,
  },
  signUpButtonContainer: {
    flexDirection: "row",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
  },
  signUpButtonText: {
    textAlign: "center",
    fontFamily: "CustomFont",
    padding: "2%",
    fontSize: 20,
    color: "#2c2C2C",
  },
});
