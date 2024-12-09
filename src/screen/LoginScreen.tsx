import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://192.168.4.47:8000/auth/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        await AsyncStorage.setItem("accessToken", data.access);
        await AsyncStorage.setItem("refreshToken", data.refresh);
        navigation.navigate("Home"); // Redirect to the next screen
      } else {
        Alert.alert("Error", data.detail || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate("SignUp");
  };
  const [loaded] = useFonts({
    CustomFont: require("../assets/fonts/LexendGiga-VariableFont_wght.ttf"),
  });

  // Prevent rendering until the font is loaded
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
      />

      {/* Login Text */}
      <View style={styles.overlay}>
        <Text style={styles.loginText}>SIGN IN</Text>
        <Text style={styles.signIn}>Sign in to your account</Text>
        <View style={styles.inputContainer}>
          <AntDesign
            name="user"
            size={24}
            color="#2c2c2c"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="#2c2c2c"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text style={styles.forgotPassword}>FORGOT YOUR PASSWORD</Text>

        <View style={styles.signInButtonContainer}>
          <TouchableOpacity onPress={handleSignIn}>
            <LinearGradient
              colors={["#D9A7FF", "#A681FF", "#5D4BFF"]}
              style={styles.button}
            >
              <Text style={styles.signInText}> Sign in</Text>
              <AntDesign
                name="login"
                size={24}
                color="#2c2c2c"
                style={styles.signInIcon}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  overlay: {
    flex: 1,
    paddingTop: "50%",
    alignItems: "center", // Centers the text horizontally
  },
  loginText: {
    fontFamily: "CustomFont", // Use the loaded font
    fontSize: 60,
    color: "#2c2c2c", // Ensures the text is visible on the background
  },
  signIn: {
    fontSize: 18,
    color: "#2c2c2c",
    textAlign: "center",
    fontFamily: "CustomFont",
    paddingTop: "2%",
    paddingBottom: "5%",
  },
  inputIcon: {
    marginRight: 10, // Space between the icon and TextInput
  },
  inputContainer: {
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
  textInput: {
    flex: 1, // Fills the remaining space in the container
    fontSize: 16,
    color: "#000",
  },

  forgotPassword: {
    color: "#2c2c2c",
    fontSize: 9,
    textAlign: "center",
    fontFamily: "CustomFont",
    textDecorationLine: "underline",
    padding: "3%",
  },

  signInButtonContainer: {
    flex: 1,
    elevation: 20,
  },
  signInText: {
    fontFamily: "CustomFont",
    color: "#2c2c2c",
    fontSize: 20,
    fontWeight: "bold",
    elevation: 20,
  },
  button: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
  },
  signInIcon: {
    marginLeft: "5%",
  },

  footerText: {
    color: "#2c2c2c",
    fontSize: 12,
    fontFamily: "CustomFont",
    textAlign: "center",
    marginBottom: "12%",
    textDecorationLine: "underline",
  },
});
