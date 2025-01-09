
import React, { useContext, useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedin,setisLoggedin} = useContext(AppwriteContext)
    console.log("Context isLoggedin:", isLoggedin);

    useEffect(() => {
      appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setisLoggedin(true);
          console.log(isLoggedin);
        }
      })
      .catch( _ => {
        setIsLoading(false);
        setisLoggedin(false);
        console.log(isLoggedin + 'Router28');
        console.log(_)
      })
    }, [appwrite, setisLoggedin])
    
    if (isLoading) {
        return <Loading/>
    }

  return (
    <NavigationContainer>
        {isLoggedin ? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
  )
}