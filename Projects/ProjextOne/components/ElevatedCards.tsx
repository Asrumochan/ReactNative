import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Slide</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>more ...</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container:{ 
    flexDirection: 'row', 
    padding: 10,
  },
  card:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    height:100,
    width:120,
    margin:2, 
    borderRadius:4
  },
  cardElevated:{
    backgroundColor: '#b3aea8',
    elevation:5,
    shadowOffset:{
        width: 2,
        height: 2
    },
    shadowColor: '#61252c'
  }
})
export default ElevatedCards