import React, { useState } from 'react';
import './Login.css'
import logo from './icons/linkedin.png'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';


const LoginPage = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [profilPic,setProfilPic]=useState('')
    const dispatch = useDispatch();
    const register =() => {
        if(!name){
            alert('please enter full name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilPic
            })
            .then(() => {
                dispatch(Login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilPic
                }))
            })
        }).catch(error => alert(error.message))
    };
    const Login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email , password).then(userAuth =>{
            dispatch(Login({
                email: userAuth.user.email,
                uid: userAuth.user.email,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    };
    return (
        <div className="Login">
            <img src={logo} alt="" />

            <form >
                <input placeholder="Full name (required)" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Profile pic Url" type='text' value={profilPic} onChange={(e) => setProfilPic(e.target.value)}/>
                <input placeholder="Email" type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password" type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={Login}>Sign-in</button>
            </form>

            <p>not a membre ? <span className="Login_register" onClick={register}>Register Now</span></p>
        </div>
    );
};

export default LoginPage;