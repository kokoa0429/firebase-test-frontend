import firebase from 'firebase'

// ** 本番環境
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  })
}

export default firebase
