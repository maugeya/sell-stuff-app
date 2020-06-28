import React from "react"
import { View, StyleSheet } from "react-native"

import AppText from "../AppText"
import MenuIcon from "../MenuIcon"

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <MenuIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
})
