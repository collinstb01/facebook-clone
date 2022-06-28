import react, { useEffect, useState } from "react";
import Img2 from "../../../../images/2.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { likepost, commentforpost, getposts } from "../../../../actions/posts";

const Feed = ({
  name,
  message,
  selectedFile,
  creator,
  createdAt,
  profileImgg,
  _id,
  likes,
  comments,
  setMessage,
}) => {
  const { userinfo } = useSelector((state) => state.userinfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  const commentFunc = () => {
    dispatch(commentforpost({ comment, name, id: _id, setMessage }));
  };

  function handle() {
    navigate(`/userProfile/${creator}`);
  }
  const user = JSON.parse(localStorage.getItem("profile"));

  const like = () => {
    dispatch(likepost({ id: _id, userId: user?.result?._id, setMessage }));
  };
  const commenthandle = () => {
    setShow((e) => !e);
  };

  const text = name?.charAt(0);
  return (
    <FeedContainer>
      <User>
        <UserProfileImg onClick={handle}>
          {profileImgg ? (
            <UserImage src={profileImgg} />
          ) : (
            <div className="dummy">{text}</div>
          )}
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
        <div className="likes">
          {likes?.includes(user?.result?._id) ? (
            <>
              <AiFillLike className="reaction-icon" onClick={like} />
              <span>You and {likes?.length - 1} other</span>
            </>
          ) : (
            <>
              <AiOutlineLike className="reaction-icon" onClick={like} />
              <span>{likes?.length} likes</span>
            </>
          )}
        </div>
        <div className="likes">
          <AiOutlineComment className="reaction-icon" onClick={commenthandle} />{" "}
          {comments?.length} <span>Comments</span>
        </div>
        <AiOutlineShareAlt className="reaction-icon" />
      </div>
      {show && (
        <div className="comments">
          <h5>All Comments</h5>
          <div className="commentinput">
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Post a Comment"
            />{" "}
            <span onClick={commentFunc}>
              <button>Comment</button>
            </span>
          </div>
          {comments?.map((val, i) => (
            <p key={i}>{val}</p>
          ))}
        </div>
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
    transition: all 0.3s ease-in-out;
    .likes {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .reaction-icon {
      width: 25px;
      cursor: pointer;
    }
  }
  h3 {
    font-size: 15px;
  }
  .comments {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
    padding: 0px 10px;

    .commentinput {
      display: flex;
      width: 100%;
      input {
        flex: 0.8;
        outline: none;
      }
      button {
        border: none;
        outline: none;
        padding: 10px;
        color: white;
        background-color: blue;
      }
      button:hover {
        opacity: 0.9;
      }
    }
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
  text-align: initial;

  h3 {
    margin-left: 5px;
  }
`;
const UserProfileImg = styled.div``;

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
