import firebase from 'firebase';
import {getAuth, signInWithPopup, OAuthProvider, FacebookAuthProvider ,GoogleAuthProvider } from "firebase/auth";

class AuthService {
    login(providerName) {
        const authProvider = `${providerName}AuthProvider()`;
        const auth = getAuth();
        return signInWithPopup(auth, authProvider);
    }
}

export default AuthService;