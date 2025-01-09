
import React from 'react'
import Signup from '../Screens/Signup'
import Login from '../Screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AuthstackParamList = {
    Signup: undefined
    Login: undefined
}
const Stack = createNativeStackNavigator<AuthstackParamList>()

const AuthStack = () => {
  return (
   
    <Stack.Navigator 
    screenOptions={{
        headerTitleAlign: 'center',
    }}
    >
<Stack.Screen name='Login' options={{ headerShown: false }} component={Login}/>
<Stack.Screen name='Signup' options={{ headerShown: false }} component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack

