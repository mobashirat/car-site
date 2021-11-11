import { useEffect, useState } from "react";
import initAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth();

    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            })
            .finally(() => setLoading(false));

    }
    //login
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home'
                history.replace(destination);
                // Signed in 
                setAuthError('');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setLoading(false));

    }
    //observe
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user)
                // ...
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, [])
    //logout
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));

    }
    return {
        user,
        registerUser,
        loginUser,
        loading,
        authError,
        logOut,

    }

}
export default useFirebase;