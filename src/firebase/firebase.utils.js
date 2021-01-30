import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {                                        //Integrate Firebase Google Sign-In into your app
    apiKey: "AIzaSyC6fLQNKJnZgaQ9Z2b-aYfI85ANklYgU9w",
    authDomain: "crwn-db-37462.firebaseapp.com",
    projectId: "crwn-db-37462",
    storageBucket: "crwn-db-37462.appspot.com",
    messagingSenderId: "170027168482",
    appId: "1:170027168482:web:aded5a23d4449ae397a4bb",
    measurementId: "G-VSZ3NZVS4F"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
   if(!userAuth) return;

   const userRef=firestore.doc(`users/${userAuth.uid}`);   //Query Fired

   const snapShot = await userRef.get();           //getting the snapshot from the userResf.

   console.log(snapShot);

   if(!snapShot.exists){
     const {displayName,email}=userAuth;
     const createdAt = new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }
     catch (error){
     console.log("error creating user",error.message);
     }
   }
   return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;