import React, {useState, useContext, createContext, useEffect} from 'react';
import { auth } from './../firebase';

const AuthContext = createContext();

//this is a custom hook basically
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    
    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    //only want this to run on component mount and then want to unsubscribe
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    };

    
    return (
        <AuthContext.Provider value={value}>
            {!loading ? props.children : <h1>LOADING</h1>}
        </AuthContext.Provider>
    );
}


