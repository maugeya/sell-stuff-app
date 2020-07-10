import React, { useState } from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms"
import usersApi from "../api/users"
import authApi from "../api/auth"
import useAuth from "../hooks/useAuth"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().lowercase().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen({ navigation }) {
  const [error, setError] = useState()
  const { login } = useAuth()

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo)

    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError("An unexpected error occurred.")
        console.log("Register error", result)
      }
      return
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    )

    login(authToken)
  }

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
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
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
