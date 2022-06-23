import React from "react";
import styled from "styled-components";

const ImageSection = ({ Icon, text }) => {
  return (
    <ImageSectionn>
      <img src={Icon} />
      <h3>{text}</h3>
    </ImageSectionn>
  );
};

export default ImageSection;

const ImageSectionn = styled.div`
  height: auto;
  margin: 0 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 600px) {
  min-height: 0vh;
  }
  img {
    height: 150px;
    width: 150px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }
  img:hover {
    animation: animate1 1s infinite;
    transform: scale(1.1);
    transition: all 0.6s ease-in-out;
  }
  @keyframes animate1 {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    color: white;
    font-size: 13px;
    text-shadow: 1px 1px 1px black;
    @media (max-width: 900px) {
      color: black;
      bottom: -20px;
      width: 100%;
      font-size: 10px;
    text-shadow: none;

  }
  }
    @media (max-width: 900px) {
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width: 400px) {
    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }
`
