import React from "react"
import { StyleSheet } from "react-native"

import Screen from "../components/Screen"
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", description: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField autoCorrect={false} name="title" placeholder="Title" />
        <AppFormField
          autoCorrect={false}
          name="price"
          keyboardType="numeric"
          placeholder="Price (£)"
        />
        <AppFormField
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
