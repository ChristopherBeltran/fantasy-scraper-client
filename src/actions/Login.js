const firebase = require('firebase');
const firebaseui = require('firebaseui');

const provider = new firebase.auth.OAuthProvider('yahoo.com');



export const yahooLogin = () => {
    return dispatch => {
        const provider = new firebase.auth.OAuthProvider('yahoo.com');
        provider.addScope('fspt-r');
        firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.
    // Yahoo OAuth access token can be retrieved by calling:
    // result.credential.accessToken
    // Yahoo OAuth ID token can be retrieved by calling:
    // result.credential.idToken
    localStorage.setItem('sessionID', result.credential.idToken)
  })
  .catch(function(error) {
    // Handle error.
  });
    }    
}