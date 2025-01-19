import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
    password: Yup.number()
    .min(4,"Should be min of 4 characters")
    .max(16,"Should be min of 16 characters")
    .required("Password Length is required"),
})
const App = () => {
    const [password, setPassword] = useState('')
    const [isPasswordGenerated ,setIsPasswordGenerated] = useState(false)
    const [lowerCase ,setLowerCase] = useState(false)
    const [upperCase ,setUpperCase] = useState(false)
    const [numbers ,setNumbers] = useState(false)
    const [specialChar ,setSpecialChar] = useState(false)

    const generatePasswordString = (passWordLength: number )=>{

    }

    const generatePassword = ( characters: string , passWordLength: number )=>{

    }

    const resetPasswordState = () =>{
      
    }

  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>App</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App