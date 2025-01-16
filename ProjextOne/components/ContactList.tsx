import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
          uuid: "1a2b3c4d",
          name: "Alice Johnson",
          status: "Engineer",
          image_url: "https://static.vecteezy.com/system/resources/previews/006/918/618/non_2x/confidence-indian-young-boy-image-photo.jpg",
        },
        {
          uuid: "2e3f4g5h",
          name: "Bob Smith",
          status: "Model",
          image_url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
        },
        {
          uuid: "3i4j5k6l",
          name: "Charlie Brown",
          status: "Photographer",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDV73jGBZvF1NWuhgZILzgMukKiEb7JqY0g&s",
        },
        {
          uuid: "4m5n6o7p",
          name: "Diana Prince",
          status: "MUA",
          image_url: "https://thumbs.dreamstime.com/b/macro-beauty-face-shot-african-girl-braids-extreme-close-up-facial-portrait-young-charming-braided-hairstyle-studio-woman-95102805.jpg",
        },
      ];
      
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {
            contacts.map(({uuid,name,status,image_url})=>(
                <View key={uuid} style={styles.userCard}>
                    <Image 
                    source={{uri:image_url}}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 6
  },
  container:{
    paddingHorizontal:16,
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#851477',
    padding:5,
    borderRadius: 10,
  },
  userImage:{
    height:60,
    width:60,
    borderRadius: 30,
    marginRight:15
  },
  userName:{
    fontSize:16,
    fontWeight: 600,
    color: 'white'
  },
  userStatus:{
    fontSize: 12,
    fontWeight: 400,
    color: 'white'
  },
})
export default ContactList