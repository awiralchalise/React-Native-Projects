import React, { createContext, FC, PropsWithChildren, useState, useEffect } from 'react';
import appwriteService from './service';

type AppContextType = {
    appwrite: appwriteService;
    isLoggedin: boolean;
    setisLoggedin: (isLoggedin: boolean) => void;
};

const appwriteInstance = new appwriteService();

export const AppwriteContext = createContext<AppContextType>({
    
    appwrite: appwriteInstance,
    isLoggedin: false,
    setisLoggedin: () => {},
});


export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
   
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        console.log('Login state changed:', isLoggedin);
    }, [isLoggedin]);

    return (
        <AppwriteContext.Provider value={{ appwrite: appwriteInstance, isLoggedin, setisLoggedin }}>
            {children}
        </AppwriteContext.Provider>
    );
};

export default AppwriteContext;
