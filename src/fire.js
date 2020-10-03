import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBSMxLGI9ADHK_fIA-I1zmLS5h_Qu-wD_Y",
    authDomain: "login-f1830.firebaseapp.com",
    databaseURL: "https://login-f1830.firebaseio.com",
    projectId: "login-f1830",
    storageBucket: "login-f1830.appspot.com",
    messagingSenderId: "179413357545",
    appId: "1:179413357545:web:4e745fd21648fd5cd5f178"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
