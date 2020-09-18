import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, email, photoURL} = res.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
      return signInUser;
    })
    .catch(error => {
      error.success = false;
      return error;
    });
}

export const handleFbSignIn = () => {
    const fbprovider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbprovider)
    .then(function(result) {
      const user = result.user;
      user.success = true;
      return user;
    }).catch(function(error) {
      error.success = false;
      return error;
    });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const {email, photoURL} = res.user;
      const signInUser = {
        isSignIn: true,
        name: name,
        email: email,
        photo: photoURL,
        success: true
      }
      updateUserName(name);
      return signInUser;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const {displayName, email, photoURL} = res.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
      return signInUser;
    })
    .catch(function(error) {
      const newUserInfo = {};
      newUserInfo.msg = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        success: false
      }
      return signOutUser;
    })
    .catch(error => {
      console.log(error.message);
    })
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(res => {
      console.log('User name updated successfully');
    }).catch(error => {
      console.log(error);
    });
}