import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signin, signup } from "../../actions/auth"
import Spinnerr from '../Spinner'

const Auth = () => {
const initial = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
    const [formData, setFormData] = useState(initial);
    const [showSpinner, setShowSpinner] = useState(false)
    const {authData} = useSelector((state) => state.auth)
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const switchMode = (e) => {
        e.preventDefault();

        setIsSignup((e) => !e)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSpinner(true)

        console.log('clicked');
        if (!isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }

    }
    return (
        <AuthContainer>
            <div className="auth">
                <div className="facebooklogo">
                    < FaFacebook className='icons' />
                </div>
                <form className="form" >
                    {!isSignup &&
                        <>
                            < Input placeholder='First Name' name='firstName' type='text' handleChange={handleChange} className='i1' />
                            < Input placeholder='Last Name' name='lastName' type='text' handleChange={handleChange} className='i2' />
                        </>
                    }
                    < Input placeholder='Email Address' name='email' type='email' handleChange={handleChange} />
                    < Input placeholder='Password' name='password' type='password' handleChange={handleChange} />
                    {!isSignup &&
                        <>
                            < Input placeholder='Confirm Password' type='password' name='confirmPassword' handleChange={handleChange} />
                        </>
                    }
                </form>
                <Button onClick={handleSubmit} >
                    {!isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <Button onClick={switchMode}>
                    {!isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
                {
                showSpinner && <Spinnerr /> 
            }
            </div>
        </AuthContainer>
    )
}

export default Auth

const AuthContainer = styled.div`
width: auto;
height: fit-content;

display: flex;
justify-content: center;
align-items: center;

.auth {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: auto;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(80, 80, 230, 0.288);

    .facebooklogo {
        width: fit-content;
        margin-bottom: 20px;
         
        .icons {
            width: 400%;
            object-fit: contain;
        }
    }
.form {
    display: flex;
    flex-direction: column;

    .i1,i2{
        width:50%
    }
}
}
`

const Button = styled.button`
padding: 10px;
text-align: center;
background-color: blue;
color: white;
border: none;
cursor: pointer;
text-transform: uppercase;
font-weight: 500;
margin-top: 30px;
`