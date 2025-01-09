import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { phonelist } from '../list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { mainParameters } from '../App'


type maintype = NativeStackScreenProps<mainParameters , 'Homepage'>

const Homepage = ( {navigation}: maintype) => {
  return (
    <View > 
     <FlatList 
     data={phonelist}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => {
      return (
        <View>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetails", {
            id: item.id ,
    photo: item.photo,
    Price: item.Price,
    Discount: item.Discount,
    Star: item.Stars,
    Sales: item.Sales,
   
          })
        }}
        >
          <View style={styles.itemsContainer}>
            <View>
              <Image
              source={{
                uri: item.photo
              }}
style={styles.image}
              />
            </View>
            <View>
            <View style={styles.starContainer}>
              <Text style={styles.starText}>{item.Stars}⭐</Text>
              <Text style={styles.salesText}>({item.Sales})</Text>
            </View>
            <View style={styles.pricesContainer}>            
              <Text style={styles.prices}>रु.{item.Price}</Text>
              <Text style={styles.discountedPrice}>रु.{(item.Price)-(((item.Discount)/100)*(item.Price))}</Text>
              <Text style={styles.discountPer}>{item.Discount}% off</Text>
            </View>           
            </View>
          </View>
        </TouchableOpacity>
        </View>
      );
    }}
    />
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  discountPer:{
    fontSize: 20,
    fontWeight: 'bold',
   marginLeft: 8, 
   marginTop: 1,
   color: '#88e788'
  },
  discountedPrice:{
    fontSize: 22,
    fontWeight: 'bold',
   marginLeft: 8
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
display: 'flex',
flexDirection: 'row',
marginTop: 10,
marginLeft: 15
  },
  salesText:{
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 2,
    paddingLeft: 6,
    color: 'gray'
  },
  starText:{
    fontSize: 15,
    borderColor: 'white',
    borderWidth: 2,
    width: 60,
    height: 27,
    paddingTop: 1,
    paddingBottom: 2,
    paddingLeft: 9,
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: 'white'
  },
  starContainer:{
flexDirection: 'row',
marginTop: 20,
marginLeft: 15
  },
  itemsContainer:{
display: 'flex',
flexDirection: 'row',
width: 420,
borderBottomWidth: 3,

marginHorizontal: 10,
marginVertical: 5,

  },
  image:{
    width: 100,
    height:150,
    resizeMode: 'contain'
  }
})