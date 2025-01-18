import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCards = () => {

    const openWebsite=(url: string)=>{
        Linking.openURL(url)
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card , styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in javaScript 21 - ES12 ?
                </Text>
            </View>
            <Image
            source={{
                uri: 'https://i2.wp.com/blog.alexdevero.com/wp-content/uploads/2021/02/15-02-21-upcoming-interesting-javascript-es2021-es12-features-to-look-for-blog.jpg?w=1024&ssl=1'
            }}
            style={styles.imageStyle}
            />
            <View style={styles.bodyContainer}>
                <Text >
                Since then, ECMAScript has evolved significantly up to ES12, officially known as ECMAScript 2021. ES12 arrived in June 2021 with new capabilities, improvements, and some syntax changes. Every JavaScript developer eager to perform at their best should learn the latest features of ES12
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=> openWebsite('https://blog.alexdevero.com/javascript-es2021-features/')}>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/')}>
                    <Text style={styles.socialLinks}>Follow me</Text>
                </TouchableOpacity>
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
    width:370,
    height:400,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  elevatedCard:{
    backgroundColor:'#e0d7df',
    elevation:5,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:'black'
  },
  headingContainer:{
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText:{
    color: 'black',
    fontSize:15,
    fontWeight: 600,
  },
  imageStyle:{
    height:190
  },
  bodyContainer:{
    padding:10
  },
  footerContainer:{
    padding:8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks:{
    fontSize:16,
    backgroundColor:'#ab91a7',
    paddingHorizontal: 20,
    paddingVertical:5,
    borderRadius:10,
    elevation:3

  }
})
export default ActionCards