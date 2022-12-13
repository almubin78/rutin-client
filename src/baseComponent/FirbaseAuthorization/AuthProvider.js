import React, { createContext } from 'react';
import app from '../firebaseConfigaration/firebase.config';
import {getAuth} from 'firebase/auth';


export const Context = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const authInfo = {};
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;