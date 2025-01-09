import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Snackbar from 'react-native-snackbar'
import AppwriteContext from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthstackParamList } from '../routes/AuthStack'




type SignupScreenProps = NativeStackScreenProps<AuthstackParamList, 'Signup'>


const Signup = ({navigation}: SignupScreenProps) => {
  const {appwrite,isLoggedin,setisLoggedin} = useContext(AppwriteContext)
const [error, seterror] = useState<string>('')
const [name, setname] = useState<string>('')
const [email, setemail] = useState<string>('')
const [password, setpassword] = useState<string>('')
const [repeatPasword, setrepeatPassword] = useState<string>('')

const handleSignup =() =>{
  if(
    name.length < 1 ||
    email.length < 1 ||
    password.length < 1 ||
    repeatPasword.length < 1 
  ){
    seterror("All values must be filled")
  }else if(password != repeatPasword){
    seterror('Password must be same')
  }else {
    const user={
      email,
      password, 
      name,
    };
    appwrite.createAccount(user)
    .then(response => {
      if(response){
        setisLoggedin(true)  
        Snackbar.show({
          text:"SignedUp Successfully",
          duration: Snackbar.LENGTH_SHORT
        })
      }
    })
    .catch(e=>{
      console.log(e);
      seterror(e.message)
    })
  }
}

  return (
   <SafeAreaView>
    <View style={styles.container}>
 <View style={styles.signinContainer}>
<Text style={styles.signin}>Create an account</Text></View>
<View style={styles.inputContainer}>
 <Text style={styles.placeholderText}>Name</Text>
      <TextInput style={styles.input}
      value={name}
      onChangeText={text =>{
        seterror('');
        setname(text);
      }
    }
    placeholder='Name'
      />
 <Text style={styles.placeholderText}>Email Address</Text>
      <TextInput style={styles.input}
      value={email}
      onChangeText={text =>{
        seterror('');
        setemail(text)
      }
    }
    placeholder='Email'
      />
       <Text style={styles.placeholderText}>Password</Text>
      <TextInput style={styles.input}
      secureTextEntry={true}
      value={password}
      onChangeText={text => {
        seterror('');
        setpassword(text);
      }
    }
    placeholder='Password'
      />
       <Text style={styles.placeholderText}>Confirm Password</Text>
      <TextInput style={styles.input}
      secureTextEntry={true}
      value={repeatPasword}
      onChangeText={text =>{
        seterror('');
        setrepeatPassword(text);
      }
    }
    placeholder='Confirm Password'
      /></View>

      <View>
        <View style={styles.ButtonContainer}>
        <Pressable style={styles.pressable}
        onPress={handleSignup}
        ><Text style={styles.signinText}>Sign up</Text></Pressable></View>
        <Pressable
        onPress={() => {
          navigation.navigate('Login')
        }}
        ><Text style={styles.create}>Already Have an Account? </Text></Pressable>
      </View>
    </View>
   </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  create:{
    marginLeft: 20,
    color: 'blue',
    fontSize: 15,
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
  inputContainer:{
    marginLeft: 20
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
  placeholderText:{
    color: '#004643',
    fontSize: 20,
    fontWeight: 'bold'
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
})