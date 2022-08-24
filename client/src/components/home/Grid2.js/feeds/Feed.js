import react, { useEffect, useRef, useState } from "react";
import {Button} from "react-bootstrap"
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { likepost, commentforpost, getposts, updatepost,deletepost } from "../../../../actions/posts";
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'

const Feed = ({
  name,
  message,
  selectedFile,
  creator,
  createdAt,
  profileImg,
  _id,
  likes,
  comments,
  setMessage,
}) => {
  const ate =  new Date(createdAt)
  const { userinfo, loading } = useSelector((state) => state.userinfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [showmessage, setShowmessage] = useState(true)
  const [title, setTitle] = useState(message)
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const newarr = comments?.map((val, i) => val.split(":"))


  const showmessageFunc = () => {
    setShowmessage((e) => !e)
    setTitle("")
  }
  const edit = () => {
    dispatch(updatepost({title, postid: _id}))
    setShowmessage((e) => !e)
    setTitle("")
  }

  const commentFunc = () => {
    dispatch(commentforpost({ comment, name: user?.result?.name, id: _id, setMessage }));
    setComment("")
  };

  function handle() {
    navigate(`/userProfile/${creator}`);
  }
  const like = () => {
    dispatch(likepost({ id: _id, userId: user?.result?._id, setMessage,name , creator}));
  };
  const commenthandle = () => {
    setShow((e) => !e);
  };
  const deleteone = () => {
    dispatch(deletepost(_id))
  }

  const text = name?.charAt(0);

  return (
    <FeedContainer>
      <User>
        <UserProfileImg onClick={handle}>
          {profileImg ? (
            <UserImage src={profileImg} />
          ) : (
            <div className="dummy">{text}</div>
          )}
        </UserProfileImg>
        <UserNameAndTimePosted style={{width: "100%",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h3 onClick={handle}>{name}</h3>
        <>
        <span>{ate.toDateString()}</span>
      {creator === user?.result?._id &&  <><AiFillEdit onClick={showmessageFunc} /> <AiFillDelete onClick={deleteone} /></>}
        </>
        </UserNameAndTimePosted>
      </User>
      <UserInput>
       {showmessage &&  <h3>{message}</h3>}
       {!showmessage &&
       <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
         <input value={title} onChange={(e) => setTitle(e.target.value)} style={{flex: 1, padding: "5px",paddingBottom: "80px"}} />
        {!title ? <Button  onClick={showmessageFunc}>Close</Button> : <Button onClick={edit}>Update</Button>}
       </div>
       }
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
              <span>{(likes?.length == 1) ? "You" :` You and ${likes?.length - 1} other`}</span>
            </>
          ) : (
            <div onClick={like} classNem="div">
              <AiOutlineLike className="reaction-icon"/>
              <span>{likes?.length} likes</span>
            </div>
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
              placeholder="Post Comment"
            />{" "}
            <span onClick={commentFunc}>
              <button>Comment</button>
            </span>
          </div>
          {newarr?.map((val, i) => (
              <span key={i}><span style={{fontSize: "17px", fontWeight: 600}}>{val[0]}:</span>{val[1]}</span>
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
  .div:target {
    /* transform: scale(4); */
    /* background-color: blue; */
}
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
    h5 {
      text-align: center;
      width: 100%;
    }
    .commentinput {
      display: flex;
      width: 100%;
      input {
        flex: 1;
        outline: none;
        margin: 0px 5px;
      }
      button {
        border: none;
        outline: none;
        padding: 6px;
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
