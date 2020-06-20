import React from "react"
import { View, Image, StyleSheet } from "react-native"

import AppText from "../components/AppText"
import Card from "../components/Card"
import ListItem from "../components/ListItem"
import colors from "../config/colors"

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/red-jacket.jpg/")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>£40</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/ange.jpg")}
            title="Ange"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
})
