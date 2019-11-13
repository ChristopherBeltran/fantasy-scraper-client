//import { firebase } from 'firebase'


//const firebase = require('firebase');
//const firebaseui = require('firebaseui');

//const provider = new firebase.auth.OAuthProvider('yahoo.com');
import * as firebase from 'firebase';

var provider = new firebase.auth.OAuthProvider('yahoo.com');


const firebaseConfig = {
  apiKey: "AIzaSyBouIAxKO8yEqgeYvuop_xuzv2u7Bxg-6E",
  authDomain: "fantasy-news-ddeeb.firebaseapp.com",
  databaseURL: "https://fantasy-news-ddeeb.firebaseio.com",
  projectId: "fantasy-news-ddeeb",
  storageBucket: "fantasy-news-ddeeb.appspot.com",
  messagingSenderId: "620542976138",
  appId: "1:620542976138:web:d4e9350aa95cce41c98d73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//export const yahooLogin = (history) => {
//    return dispatch => {
//        provider.addScope('fspt-r');
//        firebase.auth().signInWithPopup(provider)
//  .then(function(result) {
//    // User is signed in.
//    // IdP data available in result.additionalUserInfo.profile.
//    // Yahoo OAuth access token can be retrieved by calling:
//    // result.credential.accessToken
//    // Yahoo OAuth ID token can be retrieved by calling:
//    // result.credential.idToken
//    localStorage.setItem('sessionID', result.credential.idToken)
//    history.push('/dashboard')
//  })
//  .catch(function(error) {
//    console.log(error)
//  });
//    }    
//}

export const postLogin = () => {
  console.log('hit again')
  firebase.auth().getRedirectResult()
    .then(function(result) {
      console.log(result.additionalUserInfo)
    })
    .catch(function(error) {
      console.log(error)
    })

}

export const yahooLogin = (history) => {

    return dispatch => {
        provider.addScope('fspt-r');
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
          console.log(result.credential.accessToken)
          history.push('/dashboard')
          dispatch(postLogin())
        })
        .catch(function(error) {
          console.log(error)
        })
      }
}
          // Handle error

//TO-DO: 
