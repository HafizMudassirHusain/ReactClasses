import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase' // Make sure you export auth correctly from firebase.js
import { useNavigate } from 'react-router';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/')
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error => ", errorCode, errorMessage, email);
    });
   }

  const handleSignInGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result => ", result);
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
          navigate('/')
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Check if error.customData exists before accessing it
        const email = error.customData ? error.customData.email : null;

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error => ", errorCode, errorMessage, email);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <button onClick={handleSignIn}
              className="bg-blue-500 text-white m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
            >
              Sign In
            </button>
           
            <a href="#" className="inline-block align-baseline m-2 font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
            <button 
              onClick={handleSignInGoogle}
              className=" bg-blue-500 text-white font-bold m-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
            >
              SignIn With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
