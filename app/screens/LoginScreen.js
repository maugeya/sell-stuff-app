import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"

import Screen from "../components/Screen"
import AppTextInput from "../components/AppTextInput"
import AppButton from "../components/AppButton"

export default function LoginScreen() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 50,
    marginTop: 50,
    width: 80,
  },
})
