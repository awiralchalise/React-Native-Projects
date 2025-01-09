import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { mainParameters } from '../App'


type maintype = NativeStackScreenProps<mainParameters , 'ProductDetails'>

const ProductDetails = ({route}: maintype) => {
  const { id, photo, Price, Discount, Star, Sales } = route.params;
  return (
    <View>
    
      < Image source={{ uri: photo }} style={styles.image} />
      <View style={styles.ratingContainer}>
      <Text style={styles.starText}>{Star} ⭐</Text>
      <Text style={styles.salesText}>{Sales} Ratings</Text></View>
      <View style={styles.pricesContainer}>
      <Text style={styles.prices}> रु.{Price}</Text>
      <Text style={styles.discountedPrice}>रु.{(Price)-(((Discount)/100)*(Price))}</Text>
      <Text style={styles.discountPer}>{Discount}% off</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>Buy Now</Text>
      </TouchableOpacity></View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  buyText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer:{
    width: 450,
    height: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  buyButton:{
height: 60,
width: 160,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'green',
borderRadius: 8

  },
    discountPer:{
    fontSize: 20,
    fontWeight: 'bold',
   marginLeft: 8, 
   marginTop: 1,
   color: '#88e788'
  },
  prices:{
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    color: '#686D76'
      },
  pricesContainer:{
    backgroundColor: '#C1EEC1',
    marginVertical: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    width: 400,
    height: 100,
    alignItems: 'center',
    borderRadius: 10
  },
  discountedPrice:{
    fontSize: 22,
    fontWeight: 'bold',
   marginLeft: 20
  },
  salesText:{
    fontSize: 18,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 6,
    color: 'gray'
  },
  ratingContainer:{
    flexDirection: 'row',
    marginLeft: 20
  },
  starText:{
    fontSize: 18,
    borderColor: 'white',
    borderWidth: 2,
    width: 75,
    borderRadius: 7,
    height: 32,
    paddingTop: 1,
    paddingBottom: 2,
    paddingLeft: 9,
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    width: 400,
    height: 500,
    resizeMode: "cover",
    marginBottom: 20,
    marginLeft: 28,
    marginTop: 10
  },
})