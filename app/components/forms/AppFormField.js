import React from "react"
import { StyleSheet, View } from "react-native"
import { useFormikContext } from "formik"

import AppTextInput from "./AppTextInput"
import ErrorMessage from "./ErrorMessage"

export default function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext()

  return (
    <View style={styles.container}>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: 100,
  },
})
