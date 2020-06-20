import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    left: 30,
    position: "absolute",
    top: 40,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    right: 30,
    position: "absolute",
    top: 40,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
})
