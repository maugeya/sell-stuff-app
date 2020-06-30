import React from "react"
import { View } from "react-native"
import { useFormikContext } from "formik"

import ImageInputList from "../ImageInputList"
import ErrorMessage from "./ErrorMessage"

export default function AppFormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    )
  }

  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  )
}
