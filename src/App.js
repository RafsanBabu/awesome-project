import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
function App() {

  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('1');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);


  const clearInput = ()=>{
    setEmail('');
    setPassword('');
  }

  const clearError = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = ()=>{
    clearError();
    fire.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      setEmailError(errorMessage);
      setPasswordError(errorMessage);
      // ...
    });
 
  }

  const handleSignUp = ()=>{
    clearError();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      setEmailError(errorMessage);
      setPasswordError(errorMessage);
      // ...
    });
 
  }

const handleLogout = ()=>{
  fire.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  
}

const authListener = () =>{
  fire.auth().onAuthStateChanged(user =>{
    if(user){
      clearInput();
      setUser(user);
    }else{
      setUser('');
    }
  })
}

useEffect(()=>{
  authListener();
},[])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}></Hero>

      ):(
        <Login email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        >
  
        </Login>
      )}
     
    </div>
  );
}

export default App;
