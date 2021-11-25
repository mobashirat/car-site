import { useEffect, useState } from "react";
import initAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

initAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();

    const registerUser = (email, password, history, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                history.replace('/home')
                const newUser = { email, displayName: name }
                setUser(newUser)

                //save user
                saveUser(email, name)

                //send name after create to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });


                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            })
            .finally(() => setLoading(false));

    }
    //login

    //admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)

            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
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

    //save user to database

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        registerUser,
        loginUser,
        loading,
        authError,
        logOut,

    }

}
export default useFirebase;