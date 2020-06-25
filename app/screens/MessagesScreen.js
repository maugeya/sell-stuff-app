import React, { useState } from "react"
import { FlatList } from "react-native"

import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from "../components/ListItemDeleteAction"

const initialMessages = [
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

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevron
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/ange.jpg"),
            },
          ])
        }
      />
    </Screen>
  )
}
