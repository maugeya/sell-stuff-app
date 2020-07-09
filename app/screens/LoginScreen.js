import React, { useState, useContext } from "react"
import { StyleSheet, Image } from "react-native"
import * as Yup from "yup"
import jwtDecode from "jwt-decode"

import Screen from "../components/Screen"
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms"
import authApi from "../api/auth"
import AuthContext from "../auth/context"
import authStorage from "../auth/storage"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen() {
  const authContext = useContext(AuthContext)

  const [loginFailed, setLoginFailed] = useState(false)
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)

    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    const user = jwtDecode(result.data)
    authContext.setUser(user)
    authStorage.storeToken(result.data)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboadType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
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
