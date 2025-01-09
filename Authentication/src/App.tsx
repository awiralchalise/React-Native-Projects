import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppwriteProvider } from './appwrite/AppwriteContext'
import { Router } from './routes/Router'

 type RootStackParamList = {
  Home: undefined;
Login: undefined,
Signup: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  return (
    <AppwriteProvider>
   <Router/>
   </AppwriteProvider>
  )
}

export default App

const styles = StyleSheet.create({})