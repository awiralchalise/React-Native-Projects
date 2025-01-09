import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>loading</Text>
      <ActivityIndicator size='large' color='red'></ActivityIndicator>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Loading