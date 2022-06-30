import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Spinnerr from "../../../Spinner";
import Feed from "./Feed";

const Feeds = () => {
  const { posts, message,loading } = useSelector((state) => state.posts);
  const [messagee, setMessage] = useState("")
  const dispatch = useDispatch();
  
  if (!posts?.postMessages) {
    return <Spinnerr />
  }
  return (
    <FeedContainer>
      {posts?.postMessages?.map((feeds) => (
        <Feed key={feeds._id} {...feeds} setMessage={setMessage} />
      ))}
    </FeedContainer>
  );
};

export default Feeds;

const FeedContainer = styled.div`
  height: auto;
  width: 100%;
`;
