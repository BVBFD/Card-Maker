import { firebaseApp } from './firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
console.log(firebaseApp);

class AuthService {
    login(providerName) {
        let provider;
        if (providerName === 'Google') {
            provider = new GoogleAuthProvider();
        }
        if (providerName === 'Github') {
            provider = new GithubAuthProvider();
        }
    const auth = getAuth()
    return signInWithPopup(auth, provider)
  }
}

export default AuthService