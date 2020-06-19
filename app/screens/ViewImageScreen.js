import React from "react"
import { View, Image, StyleSheet } from "react-native"

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "#fc5c65",
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: "#4ECDC4",
    height: 50,
    right: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
})
