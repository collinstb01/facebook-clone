import React, { useState } from "react";
// import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import facebookLogo from "../../images/facebook_logo.svg";
import { signin, signup } from "../../actions/auth";
import Spinnerr from "../Spinner";

const Auth = () => {
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initial);
  const [message, setMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const { authData } = useSelector((state) => state.auth);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = (e) => {
    e.preventDefault();

    setIsSignup((e) => !e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);

    if (!isSignup) {
      dispatch(signup(formData, navigate, setMessage, setShowSpinner));
    } else {
      dispatch(signin(formData, navigate, setMessage, setShowSpinner));
    }
  };
  return (
    <AuthContainer>
      <div className="ctn">
        <div className="left">
          <img src={facebookLogo} className="logo" />
          <h4>
            Facebook helps you connect and Share love with the people in your
            life
          </h4>
        </div>
        <div className="auth">
          <div className="auth2">
            <form className="form">
              {!isSignup && (
                <>
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    handleChange={handleChange}
                    className="i1"
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                    className="i2"
                  />
                </>
              )}
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                handleChange={handleChange}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                handleChange={handleChange}
              />
              {!isSignup && (
                <>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    handleChange={handleChange}
                  />
                </>
              )}
            </form>
            <Button onClick={handleSubmit} className="loginBtn">
              {!isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <div className="border"> </div>
            <p style={{ textAlign: "center", color: "red" }}>{message}</p>
            <Button onClick={switchMode} className="signIn">
              {!isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </Button>
            {showSpinner && <Spinnerr />}
          </div>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.div`
  /* height: fit-content; */
  background-color: #f0f2f5;

  .ctn {
    width: auto;
    height: fit-content;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f5;
    @media (max-height: 667px) {
      /* height: fit-content; */
      padding-bottom: 20px;
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
    h4 {
      justify-content: center;
      @media (max-width: 750px) {
        font-size: 18px;
      }
    }
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h4 {
        max-width: 80%;
        margin-left: 36px;
      }
    }
    .logo {
      width: 330px;

      @media (max-width: 750px) {
        width: 300px;
      }
    }
    .auth {
      /* padding: 50px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      /* height: 100vh; */

      .auth2 {
        padding: 15px;
        border-radius: 10px;
        width: fit-content;
        box-shadow: 1px 1px 10px rgba(80, 80, 230, 0.288);
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 750px) {
          width: 90%;
        }
      }
      .form {
        display: flex;
        flex-direction: column;

        .i1,
        i2 {
          width: 50%;
        }
      }
    }
  }
  .loginBtn {
    width: 100%;
    border-radius: 10px;
    background-color: #1877f2;
  }
  .signIn {
    border-radius: 10px;
    background-color: #42b72a;
  }
  .border {
    height: 1.2px;
    width: 100%;
    margin-top: 30px;
    background-color: gray;
  }
`;

const Button = styled.button`
  padding: 10px;
  text-align: center;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
`;
