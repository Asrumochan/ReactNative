import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places of India</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image
            source={require('../Images/puri.jpg')}
            style={styles.cardImage}
            
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Jagannath Temple</Text>
            <Text style={styles.cardLabel}>Puri Odisha</Text>
            <Text style={styles.cardDescription}>As one of the Char-Dham Pilgrimages, the shrine is extremely important to Hindu followers. It also acts as a massive historical tower created in the year 1078, millennia ago. Thousands of people travel to Odisha each year to seek Lord Jagannath's graces.</Text>
            <Text style={styles.cardFooter}>33 Hrs. away</Text>
        </View>
      </View>
      <View style={[styles.card , styles.cardElevated]}>
        <Image
            source={require('../Images/Hawa-Mahal.jpg')}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Jaipur , Rajasthan</Text>
            <Text style={styles.cardDescription}>The unique feature of Hawa Mahal is its intricate facade, which resembles the honeycomb of a beehive. It stands five stories tall and is made of red and pink sandstone, giving it a distinctive appearance.</Text>
            <Text style={styles.cardFooter}>12 mins. away</Text>
        </View>
      </View>
      <View style={[styles.card , styles.cardElevated]}>
        <Image
            source={require('../Images/tajmahal.jpeg')}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra ,UttarPradesh</Text>
            <Text style={styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal</Text>
            <Text style={styles.cardFooter}> 4 Hrs 10 mins. away</Text>
        </View>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card:{
    width: 380,
    height: 385,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated:{
    backgroundColor: '#f2f0f0',
    elevation: 3,
    shadowOffset:{
        width: 1,
        height: 1
    },
    shadowColor: 'black'
  },
  cardImage:{
    height: 200,
    width: '100%',
    marginBottom: 7,
    borderTopRightRadius:30,
    overflow: 'hidden'
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:10
  },
  cardTitle:{
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 2
  },
  cardLabel:{
    fontSize: 16,
    marginBottom:6
  },
  cardDescription:{
    fontSize: 13,
    marginBottom:10,
    marginTop:6,
    flexShrink:1,
    color: '#696868'
  },
  cardFooter:{

  }
})
export default FancyCard