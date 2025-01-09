import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Snackbar from 'react-native-snackbar'
import AppwriteContext from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthstackParamList } from '../routes/AuthStack'

type LoginScreenProps = NativeStackScreenProps<AuthstackParamList, 'Login'>

const Login = ({navigation}: LoginScreenProps) => {
const {appwrite,isLoggedin, setisLoggedin} = useContext(AppwriteContext)
const [error, seterror] = useState<string>('')
const [email, setemail] = useState<string>('')
const [password, setpasswords] = useState<string>('')


const handleLogin =() =>{
  if(
    email.length < 1 ||
    password.length < 1 
  ){
    seterror("All values must be filled")
  } else {
    const user={
      email,
      password, 
    };
    appwrite.login(user)
    .then(response => {
      if(response){
        setisLoggedin(true)
        console.log(isLoggedin);
        Snackbar.show({
          text:"Logged in Successfully",
          duration: Snackbar.LENGTH_SHORT
        })
      }
    })
    .catch(e=>{
      console.log(e);
      setemail("Incorrect Email or password")
    })
  }
}
  return (
   <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.signinContainer}>
<Text style={styles.signin}>Sign in to your account</Text></View>
<View style={styles.inputContainer}>
      <Text style={styles.placeholderText}>Email Address</Text>
      <TextInput style={styles.input}
      value={email}
      onChangeText={text =>{
        seterror('');
        setemail(text)
      }
    }
    placeholder='Enter your email address'
      />
      <Text style={styles.placeholderText}>Password</Text>
      <TextInput style={styles.input}
      secureTextEntry={true}
      value={password}
      onChangeText={text => {
        seterror('');
        setpasswords(text);
      }
    }
    placeholder='Enter your password'
      /></View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.ButtonContainer}>
        <Pressable
        style={styles.pressable}
        onPress={handleLogin}
        ><Text style={styles.signinText}>Sign in</Text></Pressable>
        </View>
        <View >
          
       <Pressable
        onPress={() => {
          navigation.navigate('Signup')
        }}
        ><Text style={styles.create}>Create an Account?</Text></Pressable>
      </View>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  error:{
    marginLeft: 20,
    color: 'red',
    fontSize: 15,
  },
  create:{
marginLeft: 20,
color: 'blue',
fontSize: 15,
  },
  inputContainer:{
marginLeft: 20
  },
  signinText:{
fontSize: 30,
fontWeight: 'bold',
color: 'white',
marginLeft: 95,
marginTop: 10
  },
  pressable:{
    backgroundColor: '#004643',
    width: 300,
    height: 70,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 40,

  },
  ButtonContainer:{
    height: 80,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 20,
  },
  input:{
    marginBottom: 15,
   marginTop: 10,
    borderWidth:2,
    borderColor: 'black',
    marginRight: 50,
    borderRadius: 10,
    paddingLeft: 15,
    height: 50,
    fontSize: 18
  },
  signinContainer:{
    width: 'auto',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 20
  },
  signin:{
    marginBottom: 30,
    fontSize: 25,
    fontWeight: 'bold'
  },
  container:{
    width: '100%',
    marginTop: 40
  },
  placeholderText:{
    color: '#004643',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Login