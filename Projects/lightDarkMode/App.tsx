import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  const [backGround,setBackGround] = useState("#ffffff")
 const generateBackgroundColor =()=>{
    let hexRange = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setBackGround(color)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={[styles.container , {backgroundColor:backGround}]}>
        <StatusBar backgroundColor='#000000'/>
        <View> 
          <TouchableOpacity>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnText} onPress={()=>generateBackgroundColor()}>Press Me</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.triangle} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    width:200,
    height:50,
    borderRadius:12,
    backgroundColor: "#000000",
    paddingVertical:10,
    paddingHorizontal:30,
    alignItems:'center',
    justifyContent:'center',
  },
  actionBtnText:{
    fontSize:20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: "#fffecb"
  }, 
   triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue", // Change this to any color
  },
})


export default App