import userEvent from '@testing-library/user-event';
import React, { useRef } from 'react';
import { auth } from '../firebase';
import './Signin.css'
import Footer from '../components/Pages/Footer';
const Signin=()=>{
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const signUp= e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user=>{
console.log(user)
        }
            ).catch(err=>{
                console.log(err)
            })
    }
    const signIn= e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then(user=>{
                console.log(user)}
            ).catch(err=>{
                console.log(err)
            })
}
    
    return(
        <div>
        <div className="signin">
           <form action="">
            <h1>Sign in</h1>
            <input ref={emailRef} type="email"/>
            <input ref={passwordRef} type="password"/>
            <button onClick={signIn}>Sign in</button>
            <h6>Not yes register?<span onClick={signUp} className="signin_link">Sign up</span></h6>
            </form>
            
        </div>
        <Footer/>
        </div>
    )
}

export default Signin