import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms"
import Screen from "../components/Screen"
import CategoryPickerItem from "../components/forms/CategoryPickerItem"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
})

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "rebeccapurple",
    icon: "sofa",
  },
  { label: "Cars", value: 2, backgroundColor: "dodgerblue", icon: "car" },
  {
    label: "Kitchen",
    value: 3,
    backgroundColor: "gold",
    icon: "microwave",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "darkseagreen",
    icon: "gamepad",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "darkslateblue",
    icon: "tshirt-crew",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "indianred",
    icon: "tennis-ball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "maroon",
    icon: "movie-open",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "sandybrown",
    icon: "book-open-page-variant",
  },
  { label: "Other", value: 9, backgroundColor: "teal", icon: "alien" },
]

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
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
export default ListingEditScreen
