import React, { useEffect } from "react";
import Navbar from "./components/home/navbar.js";
import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./components/UserProfile/UserProfile";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button.js";
import NotLogin from "./components/NotLogin.js";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const {authData} = useSelector((state) => state.auth)
  console.log(authData)

  // if (!user) {
  //   return (

  //   )
  // }

  return (
    <Router>
      <Main className="div">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {" "}
                  <Auth />
                </div>
              }
            />
            {!user && (
              <Route
                path="/notsigned"
                element={
                  <div className="NotSigned">
                    <NotLogin />
                  </div>
                }
              />
            )}

            <Route
              path="/home"
              element={
                (authData?.token || user)?
                <div>
                  <Navbar />
                  <Home />
                </div>
                : <Navigate to="/notsigned" />
              }
            />
            <Route
              path="/userProfile/:id"
              element={
                <div>
                  <UserProfile />
                </div>
              }
            />
          </Routes>
        </div>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div`
  .NotSigned {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
