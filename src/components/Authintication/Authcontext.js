import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
export const signUpcontext = createContext()
const auth = getAuth(app)
const Authcontext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading
    }



    return (
        <signUpcontext.Provider value={authInfo}>
            {children}
        </signUpcontext.Provider>
    );
};

export default Authcontext;