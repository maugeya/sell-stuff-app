import React, { useState } from "react"
import { View, TextInput, Text, Switch } from "react-native"

import ViewImageScreen from "./app/screens/ViewImageScreen"
import Screen from "./app/components/Screen"
import AppTextInput from "./app/components/AppTextInput"
import AppPicker from "./app/components/AppPicker"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import AccountScreen from "./app/screens/AccountScreen"
import ListingsScreen from "./app/screens/ListingsScreen"

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "KitchenWare",
    value: 3,
  },
]

export default function App() {
  const [category, setCategory] = useState()
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  )
}
