import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading (true)
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post("/jwt", userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token);
                    }
                });
            }
            else{
                localStorage.removeItem("access-token");
            }
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic]);
    const authInfo = {
        user,
        setUser,
        loading,
        creatUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleSignIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;