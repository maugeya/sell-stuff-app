import React from "react"
import { View } from "react-native"

import WelcomeScreen from "./app/screens/WelcomeScreen"
import Card from "./app/components/Card"

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="£10"
        image={require("./app/assets/red-jacket.jpg")}
      />
    </View>
  )
}
