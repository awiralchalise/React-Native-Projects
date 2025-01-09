import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './screens/Homepage';
import ProductDetails from './screens/ProductDetails';

export type mainParameters={
  Homepage: undefined;
  ProductDetails: {
    id: number,
    photo: string,
    Price: number,
    Discount: number,
    Star: string,
    Sales: string,
  
  }
}


const Stack = createNativeStackNavigator<mainParameters>()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homepage'>
<Stack.Screen
name='Homepage'
component={Homepage}
options={{
  title: 'All Products'
}}
/>
<Stack.Screen
name='ProductDetails'
component={ProductDetails}
options={{
  title: 'Products'
}}
/>
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App

const styles = StyleSheet.create({})