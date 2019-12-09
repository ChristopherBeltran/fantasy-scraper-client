//import { firebase } from 'firebase'


//const firebase = require('firebase');
//const firebaseui = require('firebaseui');

//const provider = new firebase.auth.OAuthProvider('yahoo.com');
import * as firebase from 'firebase';

var provider = new firebase.auth.OAuthProvider('yahoo.com'); //yahoo initialization


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

export const confirmedYahooLogin = () => {
  return {
    type: "YAHOO_LOGIN"
  }
}

export const yahooLogin = (history) => {

    return dispatch => {
        provider.addScope('fspt-r');
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
          console.log(result.credential.accessToken)
          history.push('/dashboard')
          dispatch(confirmedYahooLogin())
        })
        .catch(function(error) {
          console.log(error)
        })
      }
}






//TO-DO: 
// * set up call to the yahoo sports API with the OAuth token that is returned from the yahooLogin method
// * render content on dashboard page
// * create redux actions and state for when a user is logged into yahoo
