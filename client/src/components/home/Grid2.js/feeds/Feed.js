import react, { useEffect } from "react";
import Img2 from "../../../../images/2.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { likepost } from "../../../../actions/posts";

const Feed = ({
  name,
  message,
  selectedFile,
  creator,
  createdAt,
  profileImgg,
  _id
}) => {
  const { userinfo } = useSelector((state) => state.userinfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handle() {
    navigate(`/userProfile/${creator}`);
  }
  const user = JSON.parse(localStorage.getItem("profile"))
  console.log(_id)
  const like = () => {
    dispatch(likepost({id: _id, userId: user?.result?._id}))
  console.log(_id)
  console.log( user?.result?._id)

  }

  const text = name?.charAt(0);
  return (
    <FeedContainer>
      <User>
        <UserProfileImg onClick={handle}>
          {profileImgg ? <UserImage src={profileImgg} /> :
          <div className="dummy">
     {text}   
          </div>}
        </UserProfileImg>
        <UserNameAndTimePosted>
          <h3 onClick={handle}>{name}</h3>
          <span>{createdAt}</span>
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
      <div className="reactions">
        <AiFillLike className="reaction-icon" onClick={like} />
        <AiOutlineComment className="reaction-icon" />
        <AiOutlineShareAlt className="reaction-icon" />
      </div>
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
  padding-top: 13px;
  .dummy {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 10px; 
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
  .reactions {
    padding-block: 10px;
    background-color: whitesmoke;
    text-align: center;
    justify-content: space-around;
    display: grid;
    grid-auto-flow: column;

    .reaction-icon {
      width: 25px;
      cursor: pointer;
    }
  }
  h3 {
    font-size: 15px;
  }
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
    margin-left: 5px;
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
  padding: 10px 0px;
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
