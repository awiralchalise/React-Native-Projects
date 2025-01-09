import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Snackbar from 'react-native-snackbar'
import AppwriteContext from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'


type Userobj ={
  email: string,
  name: string
}


const Home = () => {
  const [userData, setuserData] = useState<Userobj>()
  const {appwrite, isLoggedin, setisLoggedin} = useContext(AppwriteContext)
  const handlelogout = () => {
    appwrite.logout()
    .then(() => {
      setisLoggedin(false);
      console.log(isLoggedin+ 'home 22');
      Snackbar.show({
        text: 'Logged out Successfully',
        duration: Snackbar.LENGTH_LONG
      })
    })
  }

  useEffect(() => {
    appwrite.getCurrentUser()
    .then(response => {
      if (response) {
        const user: Userobj ={
          name: response.name,
          email: response.email
        }
        setuserData(user)
      }
    })
  }, [appwrite])
  
  return (
    <SafeAreaView>
      <View>
        {userData && (
          <View>
            <Text>Name: {userData.name}</Text>
            <Text>Email: {userData.email}</Text>
            <View>
              <TouchableOpacity
              onPress={handlelogout}><Text>Logout</Text></TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Home