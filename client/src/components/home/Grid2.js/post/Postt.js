import React from "react";
import styled from "styled-components";

const Postt = ({ Icon, text }, Color) => {
  return (
    <Posttt>
      <div className="icon">
        <Icon className={` icons`} />
      </div>
      <h3>{text}</h3>
    </Posttt>
  );
};

export default Postt;

const Posttt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 10px;

  .icon {
    width: 100%;
    height: auto;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icons {
    width: 14px;
  }
`;
