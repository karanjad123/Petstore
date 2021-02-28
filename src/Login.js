import React from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
function Login() {
    const history=useHistory()
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');

    const signin =e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://cdn2.vectorstock.com/i/1000x1000/23/56/dog-pet-store-logo-simple-style-vector-23042356.jpg" alt=''/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e =>setPassword(e.target.value)}  />

                    <button type='submit' onClick={signin} className='login_signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login_registerButton'>Create New Account</button>
            </div>
        </div>
    )
}

export default Login
