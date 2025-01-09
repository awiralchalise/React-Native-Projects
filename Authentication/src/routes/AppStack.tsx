import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../Screens/Home'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


export type AppstackParamList = {
    Home: undefined
}


const Stack = createNativeStackNavigator<AppstackParamList>()

const AppStack = () => {
  return (

    <Stack.Navigator 
    >
<Stack.Screen name='Home' options={{ headerShown: false }} component={Home}/>
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})