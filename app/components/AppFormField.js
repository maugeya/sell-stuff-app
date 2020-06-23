import React from "react"
import {} from "react-native"
import { useFormikContext } from "formik"

import AppTextInput from "./AppTextInput"
import ErrorMessage from "./ErrorMessage"

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
