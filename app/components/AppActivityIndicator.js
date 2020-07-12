import React from "react"
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"

export default function AppActivityIndicator({ visible = false }) {
  if (!visible) return null
  return (
    <View style={styles.animationContainer}>
      <LottieView
        style={styles.lottieView}
        autoPlay
        loop
        source={require("../assets/animations/loadingAnimation")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  lottieView: {
    height: 150,
    width: 150,
  },
})
