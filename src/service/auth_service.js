import { firebaseApp } from './firebase';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
    constructor(){
      this.auth = getAuth();
      this.googleAuthProvider = new GoogleAuthProvider();
      this.githubAuthProvider = new GithubAuthProvider();
    }

    onAuthChange(onUserChanged) {
      this.auth.onAuthStateChanged((user) => {
        onUserChanged(user);
      });
    }

    login(providerName) {
        let provider;
        if (providerName === 'Google') {
            provider = this.googleAuthProvider;
        }
        if (providerName === 'Github') {
            provider = this.githubAuthProvider;
        }
    return signInWithPopup(this.auth, provider);
  }

    logout() {
      this.auth.signOut();
    }
}

export default AuthService