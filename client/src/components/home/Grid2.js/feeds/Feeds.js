import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getposts } from "../../../../actions/posts";
import { getalluserinfo } from "../../../../actions/userinfo";
import Feed from "./Feed";

const Feeds = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  console.log(posts)

  useEffect(() => {
    dispatch(getalluserinfo());
    dispatch(getposts());
  }, [posts]);

  return (
    <FeedContainer>
      {posts?.postMessages?.map((feeds) => (
        <Feed key={feeds._id} {...feeds} />
      ))}
    </FeedContainer>
  );
};

export default Feeds;

const FeedContainer = styled.div`
  height: auto;
  width: 100%;
`;
