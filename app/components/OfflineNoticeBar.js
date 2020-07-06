import React from "react"
import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { useNetInfo } from "@react-native-community/netinfo"

import colors from "../config/colors"
import AppText from "../components/AppText"

export default function OfflineNoticeBar() {
  const netInfo = useNetInfo()
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.noticeBarText}>No Internet Connection</AppText>
      </View>
    )
  return null
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  noticeBarText: {
    color: colors.white,
  },
})
