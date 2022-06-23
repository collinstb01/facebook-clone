import react from "react";
import Img2 from "../../../../images/2.jpg";
import styled from "styled-components";

const Feed = ({ name, message, selectedFile }) => {
  return (
    <FeedContainer>
      <User>
        <UserProfileImg>
          <UserImage src={Img2} />
        </UserProfileImg>
        <UserNameAndTimePosted>
          <h3>{name}</h3>
        </UserNameAndTimePosted>
      </User>
      <UserInput>
        <h3>{message}</h3>
      </UserInput>
      {selectedFile && (
        <UserPostImg>
          <Img src={selectedFile} />
        </UserPostImg>
      )}
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const User = styled.div`
  display: flex;
  flex-direction: row;

  height: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
const UserNameAndTimePosted = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    margin-left: 20px;
  }
`;
const UserProfileImg = styled.div`
  
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: fit-content;
  margin: 0px 10px;
`;
const UserInput = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 15px;
  font-size: 15px;
`;
const UserPostImg = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 450px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
