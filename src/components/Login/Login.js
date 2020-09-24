import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './Login.css';
import facebook from '../../material/Icon/fb.png';
import google from '../../material/Icon/google.png';
import { handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

initializeLoginFramework();

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
        error: '',
        success: false
    })
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" }};

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            if(res.success){
                handleResponse(res, true);
            } else {
                alert(res.message);
            }
        })
    }
    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
            if(res.success){
                handleResponse(res, true);
            } else {
                console.log(res);
                alert(res.message);
            }
        })
    }
    const handleBlur = (event) => {
        let isFieldValid = true;
        if(event.target.name === 'name'){
            if(event.target.value === ''){
                alert('Field must not be empty.')
            }
        }
        if(event.target.name === 'email'){
          if(event.target.value === ''){
            alert('Field must not be empty')
          }else{
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            if(!isFieldValid){
              alert('Type a valid email.');
            }
          }
        }
        if(event.target.name === 'password'){
          if(event.target.value === ''){
            alert('Field must not be empty.')
          }else{
            const passwordLength = event.target.value.length > 5;
            isFieldValid = passwordLength;
            if(!isFieldValid){
              alert('Password is too short.');
            }else{
              const passwrodHasNumber = /\d{1}/.test(event.target.value);
              isFieldValid = passwrodHasNumber;
              if(!isFieldValid){
                alert('Password must be have at least a digit.');
              }
            }
          }
        }
        if(event.target.name === 'confirmPassword'){
            if(event.target.value === ''){
                alert('Field must not be empty.')
            }
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo);

        }
    }
    const handleSubmit = (e) => {
        if(newUser){
            if(user.name && user.email && user.password && user.confirmPassword){
                if(user.password === user.confirmPassword){
                    createUserWithEmailAndPassword(user.name, user.email, user.password)
                    .then(res => {
                        if(res.success){
                            handleResponse(res, true);
                        } else {
                            alert(res.error);
                        }
                    })
                }else{
                    alert('Password & Confirm password not matched.')
                }
            }else{
                alert('Field must not be empty.');
            }
        }
    
        if(!newUser){
            if(user.email && user.password){
                signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    if(res.success){
                        handleResponse(res, true);
                    } else {
                        alert(res.msg);
                    }
                })
            }else{
                alert('Field must not be empty.');
            }
        }
        e.preventDefault();
    }
    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    return (
        <div>
            <div>
                <div className="loginForm">
                    <form action="" onSubmit={handleSubmit}>
                        {!newUser && <h2 style={{textAlign: 'left'}}>Login</h2>}
                        {newUser && <h2 style={{textAlign: 'left'}}>Create an account</h2>}
                        {newUser && <TextField onBlur={handleBlur} name="name"  style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Name" />}
                        <TextField onBlur={handleBlur} name="email" style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Email" />
                        <TextField onBlur={handleBlur} name="password" type="password" style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Password" />
                        {newUser && <TextField onBlur={handleBlur} name="confirmPassword" type="password" style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Confirm Password" />}
                        <br/>
                        {!newUser && <div className="d-flex justify-content-between" style={{padding: '10px 30px'}}>
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Remember me" />
                            <button href="#signup" style={{fontSize: '16px', textDecorationLine: 'underline', color: '#F9A51A', border: 'none', backgroundColor: '#fff'}}>Forgot Password</button>
                        </div>}
                        {!newUser && <input type="submit" className="btnLogin" value="Login"/>}
                        <br/>
                        {newUser && <input type="submit" className="btnLogin" value="Create an account"/>}
                        <br/>
                        {!newUser && <small>Don't have an account? <button onClick={() => setNewUser(true)} style={{fontSize: '16px', textDecorationLine: 'underline', color: '#F9A51A', border: 'none', backgroundColor: '#fff'}}>Create an account</button></small>}
                        <br/>
                        {newUser && <small>Already have an account? <button onClick={() => setNewUser(false)} style={{fontSize: '16px', textDecorationLine: 'underline', color: '#F9A51A', border: 'none', backgroundColor: '#fff'}}>Login</button></small>}
                    </form>
                </div>
                <button className="login-with" onClick={fbSignIn}>
                    <img src={facebook} style={{width: '25px', marginRight: '5px'}} alt=""/>
                    Continue with Facebook
                </button>
                <br/>
                <button className="login-with" onClick={googleSignIn}>
                    <img src={google} style={{width: '20px', marginRight: '5px'}} alt=""/>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;