import React from "react";
import styled from "styled-components";

const UserDummy = ({text}) => {
  return (
    <Mian>
      <span>{text}</span>
    </Mian>
  );
};

export default UserDummy;

const Mian = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: black;
  color: blue;
  font-size: 20px;

  /* @media (max-width: 500px) {
    left: 35%;
  } */
`;
