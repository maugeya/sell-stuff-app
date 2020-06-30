import React from "react"
import Constants from "expo-constants"
import { StyleSheet, SafeAreaView, View } from "react-native"

export default function Screen({ children, style }) {
  console.log(style)
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
})
