//import { firebase } from 'firebase'


//const firebase = require('firebase');
//const firebaseui = require('firebaseui');

//const provider = new firebase.auth.OAuthProvider('yahoo.com');
import * as firebase from 'firebase';
import { Client } from 'espn-fantasy-football-api';


var provider = new firebase.auth.OAuthProvider('yahoo.com'); //yahoo initialization
const myClient = new Client({ leagueId: 691895 });  //espn initialization
myClient.setCookies({ espnS2: 'AEAdcAuss9ehaF6A6dYl218hXSqH56vVi%2BPiRsGkomu5ZjaiXGc37YUXauByMbJwqgjgx7a%2FeGw4vN1rY3XeqUfJ56rWumlRBu7l%2F12iyH4IOSiHkrqfwweQSLAdgHOpN9vdbsY%2FhPNUsOmbz9K2aebvh9AjJbPKq6K%2F8bPnfOdtULNbR%2FLbZUvwpwAeAPNbtvkUe2Pk0DOv9XZoUMRQ5KuNXUMzRLvH%2B8Fuin1XMsMENLRcDe86IHSxRW1IHmU34KX3Htbh091goO%2FGQ0dTOOHU%2BoAbGtnlBMYnOYTEJF%2B3NSRsb5QK8U25FtlM2RTSyKU%3D', SWID: '{07F2C635-DB39-41EA-816E-5A36E98143D4}' });



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

export const confirmedEspnLogin = () => {
  return {
    type: "ESPN_LOGIN"
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


export const espnLogin = (history) => {
  return dispatch => {
    myClient.setCookies({ espnS2: 'AEAdcAuss9ehaF6A6dYl218hXSqH56vVi%2BPiRsGkomu5ZjaiXGc37YUXauByMbJwqgjgx7a%2FeGw4vN1rY3XeqUfJ56rWumlRBu7l%2F12iyH4IOSiHkrqfwweQSLAdgHOpN9vdbsY%2FhPNUsOmbz9K2aebvh9AjJbPKq6K%2F8bPnfOdtULNbR%2FLbZUvwpwAeAPNbtvkUe2Pk0DOv9XZoUMRQ5KuNXUMzRLvH%2B8Fuin1XMsMENLRcDe86IHSxRW1IHmU34KX3Htbh091goO%2FGQ0dTOOHU%2BoAbGtnlBMYnOYTEJF%2B3NSRsb5QK8U25FtlM2RTSyKU%3D', SWID: '{07F2C635-DB39-41EA-816E-5A36E98143D4}' });
    history.push('/dashboard')
    dispatch(confirmedEspnLogin())
  }
}



//TO-DO: 
// * set up call to the yahoo sports API with the OAuth token that is returned from the yahooLogin method
// * render content on dashboard page
// * create redux actions and state for when a user is logged into yahoo
