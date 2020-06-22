import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import MenuIcon from "../components/MenuIcon"
import colors from "../config/colors"
import ListItemSeparator from "../components/ListItemSeparator"

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ange"
          subTitle="ange@email.com"
          image={require("../assets/ange.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <MenuIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<MenuIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  menuListItem: {
    backgroundColor: colors.light,
  },
  screen: {
    backgroundColor: colors.light,
  },
})
