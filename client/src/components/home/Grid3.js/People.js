import React from "react";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import TextImg from "../textimg";
import Peopleee from "./Peoplee";
import Img1 from "../../../images/1.jpg";
import Img2 from "../../../images/2.jpg";
import Img3 from "../../../images/3.jpg";
import Img4 from "../../../images/4.jpg";
import Img5 from "../../../images/5.jpg";
import Img6 from "../../../images/6.jpg";

const People = () => {
  return (
    <Peoplee>
      <div className="top">
        <h2>Contacts</h2>
        <FaVideo className="icons" />
        <AiOutlineSearch className="icons" />
        <BiDotsHorizontalRounded className="icons" />
      </div>
      <div className="bottom">
        <Peopleee Icon={Img1} text="Mark Zukerberg" />
        <Peopleee Icon={Img2} text="Bill Gate" />
        <Peopleee Icon={Img3} text="Larry Page" />
        <Peopleee Icon={Img5} text="Elon Musk" />
        <Peopleee Icon={Img6} text="Jef Bezzos" />
      </div>
    </Peoplee>
  );
};

export default People;

const Peoplee = styled.div`
  height: fit-content;
  width: 100%;

  .top {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h1 {
      margin-right: 15px;
    }

    .icons {
      margin: 6px;
      width: 15px;
      color: rgb(92, 92, 117);
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
