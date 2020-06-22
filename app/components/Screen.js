import React from "react"
import Constants from "expo-constants"
import { StyleSheet, SafeAreaView, YellowBox } from "react-native"

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
})
