import React, {useState,useEffect} from 'react';
function Login (props) {

    const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount, setHasAccount,emailError,passwordError}=props;
    return(
        <div>
            <label>User Name:</label>
            <input type="text"  onChange={(e)=> setEmail(e.target.value)} />  
            <br></br>
            <p>{emailError}</p>
            <label>Password: </label>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>  
            <p>{passwordError}</p>
            <br></br>
            <div className="buttonContainer">
                {hasAccount ? (
                <><button onClick={handleLogin}>Sign In</button>  <p>Don't have any account? <span onClick={()=>setHasAccount(!hasAccount)}>SignUp</span></p></>
                   
                ):(
                <><button onClick={handleSignUp}>Sign Up</button>  <p>Have Account? <span onClick={()=>setHasAccount(!hasAccount)}>SignIn</span></p></>
                )}
            </div>

        </div>
    );
}
export default Login;