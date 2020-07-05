import React from "react"
import { View, StyleSheet } from "react-native"
import { Image } from "react-native-expo-image-cache"

import AppText from "../components/AppText"
import Card from "../components/Card"
import ListItem from "../components/ListItem"
import colors from "../config/colors"

export default function ListingDetailsScreen({ route }) {
  const listing = route.params
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbanilUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>£{listing.price}</AppText>
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
