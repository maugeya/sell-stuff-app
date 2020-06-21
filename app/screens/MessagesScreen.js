import React from "react"
import { FlatList, StyleSheet, View } from "react-native"

import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from "../components/ListItemDeleteAction"

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/ange.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/ange.jpg"),
  },
]

export default function MessageScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => <ListItemDeleteAction />}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected ", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
