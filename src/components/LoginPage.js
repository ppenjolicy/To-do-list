import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './LoginForm.css';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <MDBContainer>
                <MDBRow className="LoginForm">
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign in Facebook</p>
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn>Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default LoginPage;