import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './LoginForm.css';
import fire from '../config/fire'

const LoginPage = () => {
    
    const AuthFacelogin = () => {

        var provider = new fire.auth.FacebookAuthProvider();

        fire.auth().signInWithPopup(provider).then(function(result) {

            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token);
            console.log(user);

          }).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;

            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);

          });
    }

    return (
        <div>
            <button onClick={AuthFacelogin}>Login</button>                  
        </div>
    )
}

export default LoginPage;