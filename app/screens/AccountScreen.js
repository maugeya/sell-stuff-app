import React, { useContext } from "react"
import { StyleSheet, View, FlatList } from "react-native"

import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import MenuIcon from "../components/MenuIcon"
import colors from "../config/colors"
import ListItemSeparator from "../components/ListItemSeparator"
import AuthContext from "../auth/context"
import authStorage from "../auth/storage"

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
    targetScreen: "Messages",
  },
]

export default function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext)

  const handleLogout = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<MenuIcon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
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
