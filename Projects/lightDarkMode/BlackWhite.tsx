import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'

const BlackWhite = () => {
  const [backGround,setBackGround] = useState("#000000")
  const changeBackground = ()=>{
    backGround === "#000000" ? setBackGround("#ffffff") : setBackGround("#000000")
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={[styles.container , {backgroundColor: backGround}]}>
        <StatusBar backgroundColor='#000000'/>
        <View> 
          <TouchableOpacity>
            <View>
                {
                    backGround === "#000000" ? <MaterialIcons name='toggle-off' size={80} color={"white"} onPress={()=>changeBackground()} /> : <MaterialIcons name='toggle-on' size={80} color={"black"} onPress={()=>changeBackground()} />
                }
            </View>
          </TouchableOpacity>
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
  }
})


export default BlackWhite