import React from "react"
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native"

import AppButton from "../components/AppButton"
import colors from "../config/colors"

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoImage}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => console.log("tapped login")}
          color={colors.primary}
        />
        <AppButton
          title="register"
          onPress={() => console.log("tapped register")}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
})
