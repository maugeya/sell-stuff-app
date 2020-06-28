import React, { useState } from "react"
import { useFormikContext } from "formik"

import AppPicker from "./AppPicker"
import ErrorMessage from "./ErrorMessage"

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext()
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
