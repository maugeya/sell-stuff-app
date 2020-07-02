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
    justifyContent: "center",
    flex: 1,
  },
  lottieView: {
    height: 200,
    width: 200,
  },
})
