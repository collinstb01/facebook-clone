import React, { useEffect } from "react";
import Navbar from "./components/home/navbar.js";
import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/auth/auth";
import { useDispatch } from "react-redux";
import UserProfile from "./components/UserProfile/UserProfile";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button.js";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <Main className="div">
        <Routes>
          <Route
            path="/auth"
            element={<div> <Auth /></div>}
          />
          <Route
            path="/"
            element={
              <div>
                {/* {!user?.result ? (
                  <div className="NotSigned">
                    <img src={img} style={{ width: "300px" }} />
                    <h1>Please SignIn to View post</h1>
                    <Link to="/auth">
                      <Button>Go to Login Page</Button>
                    </Link>
                  </div>
                ):  */}
               <div>
               <Navbar />
                <Home />
               </div>
              </div>
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
