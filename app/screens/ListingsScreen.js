import React from "react"
import { FlatList, StyleSheet } from "react-native"

import Screen from "../components/Screen"
import Card from "../components/Card"
import colors from "../config/colors"

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 40,
    image: require("../assets/red-jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch, still looking good!",
    price: 200,
    image: require("../assets/sofa.jpg"),
  },
]

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})
