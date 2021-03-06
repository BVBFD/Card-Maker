import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor(app) {
    this.auth = getAuth(app);
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
    if (providerName === "Google") {
      provider = this.googleAuthProvider;
    }
    if (providerName === "Github") {
      provider = this.githubAuthProvider;
    }
    return signInWithPopup(this.auth, provider);
  }

  logout() {
    this.auth.signOut();
  }
}

export default AuthService;
