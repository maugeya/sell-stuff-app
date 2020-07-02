import React, { useState, useEffect } from "react"
import { FlatList, StyleSheet } from "react-native"

import Card from "../components/Card"
import colors from "../config/colors"
import listingsApi from "../api/listings"
import routes from "../navigation/routes"
import Screen from "../components/Screen"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"

export default function ListingsScreen({ navigation }) {
  const [error, setError] = useState(false)
  const [listings, setListings] = useState([])

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    const res = await listingsApi.getListings()
    if (!res.ok) return setError(true)
    setError(false)
    setListings(res.data)
  }
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
