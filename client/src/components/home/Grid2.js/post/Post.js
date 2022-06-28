import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Postt from "./Postt";
import { FaVideo } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {AiFillCamera} from "react-icons/ai"
import FileBase from "react-file-base64";
import { createpost, getposts } from "../../../../actions/posts";
import { getuserinfo } from "../../../../actions/userinfo";

const Post = () => {
  const [postData, setPostData] = useState({ message: "", selectedFile: "" });
  const { userinfo,alluserinfo } = useSelector((state) => state.userinfo);
  const [input, setInput] = useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id;
  // console.log(userinfo)
// console.log(userinfo?.data?.userInfor?.profileImg)
  const showButton = () => {
    setInput((e) => !e);
  };
  useEffect(() => {
    dispatch(getuserinfo(id))

  }, [])

  const Posts = (e) => {
    e.preventDefault();

    setInput(false);
    dispatch(
      createpost({ ...postData, name: user?.result?.name, creator: id, profileImgg:  userinfo?.data?.userInfor?.profileImg })
    );

    // dispatch(updatepost(currentId, { ...postData, name: user?.result?.name }));
    // //   clear();
  };
  return (
    <Navv>
      <NavvCtn1>
        <Avatar />
        <Input
          placeholder="Whats on your mind, Dommy Name"
          onClick={showButton}
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
          <label className="inputLabel" style={{cursor: "pointer", display: "flex", alignItems:"center"}}>
            < AiFillCamera style={{width: "30px"}} />
            <span>Select Photo</span>
         <div style={{display: "none"}}>
         <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
         </div>
          </label>
        {input && <button onClick={Posts}>Post</button>}
      </NavvCtn1>
      <NavvCtn2>
        <Postt Icon={FaVideo} text="Live Video" />
        <Postt Icon={AiOutlineSearch} text="Photo/Video" />
        <Postt Icon={BiDotsHorizontalRounded} text="Feeling Activity" />
      </NavvCtn2>
    </Navv>
  );
};

export default Post;

const Navv = styled.div`
  margin: 20px 0px;
  height: auto;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0px;
  background-color: white;
`;
const NavvCtn1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
    padding-bottom: 10px;
  width: auto;
  height: auto;
  @media (max-width: 700px) {
    flex-direction: column;
  }

  button {
    display: flex;
    padding: 15px;
    border-radius: 10px;
    margin-left: 8px;
    color: white;
    background-color: blue;
    outline: none;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  button:hover {
    opacity: 1;
  }
`;
const NavvCtn2 = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: auto;
  height: auto;
`;
const Avatar = styled.img`
  background-color: black;
  height: 30px;

  border-radius: 50%;
  width: 30px;
  margin-right: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;
const Input = styled.input`
  display: flex;
  //flex: 0.8;
  border-radius: 10px;
  border: none;
  background-color: #faf9f6;

  // outline: 55px blue;
  padding: 13px;
`;
