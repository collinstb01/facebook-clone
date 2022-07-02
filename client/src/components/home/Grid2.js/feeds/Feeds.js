import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Spinnerr from "../../../Spinner";
import Feed from "./Feed";
import { Instagram } from "react-content-loader";
import { getposts, getUserpost } from "../../../../actions/posts";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import img from "../../../../images/network.png"

const Feeds = () => {
  const { posts, message, loading } = useSelector((state) => state.posts);
  const [messagee, setMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(message)
  const [page, setPage] = useState(1)
  useEffect(() => {
      dispatch(getposts(page));
  }, [dispatch, message, page]);
  if (!posts?.postMessages) {
    return <Instagram />;
  }
  const refresh = () => {
    setPage(1)
    window.scrollTo({top: 0, behavior: "smooth"})
    dispatch(getposts(page));
  }
  const innerref = useRef()

  // const onscroll = () => {
  //   if (innerref.current) {
  //   const {scrollTop, scrollHeight,clientHeight } = innerref.current
  //     if (scrollTop + clientHeight === scrollHeight ) {
  //       console.log("reach the bottom")
  //       if ( posts?.postMessages.length < 7) {
  //         return
  //       }
  //       if (posts) {
  //         setPage((e) => ++e)
  //       }
  //       window.scrollTo({top: 0, behavior: "smooth"})
  //       console.log(page)
  //     }
  //   }
  // }
  console.log(page)
  const nextpage = () => {
    if ( posts?.postMessages.length < 7) {
              return
            }
            if (posts) {
              setPage((e) => ++e)
            }
            window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <FeedContainer
    onScroll={onscroll} 
    ref={innerref}
    // style={{height: "100vh", overflowY: "auto"}}
    >
      {posts?.postMessages?.map((feeds) => (
        <Feed key={feeds._id} {...feeds} setMessage={setMessage} />
      ))}
      <div className="no">
      {posts?.postMessages.length === 7 &&  <Button onClick={nextpage}>Load More Post</Button>}
      </div>
      {
        loading && <Spinnerr text={"Loaing new post"} />
      }
      {
        posts?.postMessages.length < 7 && 
        <div className="no">
        <img src={img}/>
        <p>No more post to view</p>
        <Button onClick={refresh}>Refresh</Button>
        </div>
      }
    </FeedContainer>
  );
};

export default Feeds;

const FeedContainer = styled.div`
  height: auto;
  width: 100%;
  
  .no {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;

    img {
    width: 100%;
  }
  }

`;
