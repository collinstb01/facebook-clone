import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserpost } from "../../actions/posts";
import Feed from "../home/Grid2.js/feeds/Feed";
import img from "../../images/8.jpg";
import img2 from "../../images/9.jpg";
import Navbar from "../home/navbar";
import styled from "styled-components";
import Textimg from "../home/textimg";
import Post from "../home/Grid2.js/post/Post";
import UserDummy from "./UserDummy";
import FileBase from "react-file-base64";
import Modall from "../modal/modal";
import { getfollowers, getuserinfo } from "../../actions/userinfo";
import img4 from "../../images/network.png";
import img3 from "../../images/dummy.jpg";
import Button from "react-bootstrap/esm/Button";
import Spinnerr from "../Spinner";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { userposts } = useSelector((state) => state.posts);
  const { userinfo, message, loading } = useSelector((state) => state.userinfo);

  console.log(userinfo);
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  console.log(userposts?.data?.PostbyUser);

  useEffect(() => {
    dispatch(getuserinfo(id));
    dispatch(getUserpost(id));
  }, [dispatch, message]);
  const text = userinfo?.data?.userInfor?.name?.charAt(0);

  const handleFollow = () => {
    dispatch(
      getfollowers({
        follower: user?.result?._id,
        followee: id,
        userInfoid: userinfo?.data?.userInfor?._id,
        follower_name: user?.result?.name,
      })
    );
    dispatch(getuserinfo(id));
  };
  if (!userinfo?.data?.userInfor) {
    return (
    <div>
       <Navbar />
       <Spinnerr />
    </div>
    )
  }

  return (
    <Main>
      <Navbar />
      <div className="images">
        <div className="cover-photo">
          {userinfo?.data?.userInfor?.coverImg ? (
            <img src={userinfo?.data?.userInfor?.coverImg} />
          ) : (
            <img src={img3} />
          )}{" "}
        </div>
        {userinfo?.data?.userInfor?.profileImg ? (
          <img
            className="profile_photo"
            src={userinfo?.data?.userInfor?.profileImg}
          />
        ) : (
          <div className="profile_photo">
            <UserDummy className="profile_photo" text={text} />
          </div>
        )}
      </div>
      <h1>{userinfo?.data?.userInfor?.name}</h1>
      <p>
        {userinfo?.data?.userInfor?.bio
          ? userinfo?.data?.userInfor?.bio
          : "Enter Your Bio"}
      </p>
      {user?.result?._id !== id && (
        <div>
          <Button onClick={handleFollow} style={{marginBottom: "5px"}}>
            {userinfo?.data?.userInfor?.followeeId?.includes(user?.result?._id)
              ? "Unfollow"
              : "Follow"}
          </Button>
        </div>
      )}
      <div className="follow">
        <span style={{ padding: "0px 5px" }}>
          {userinfo?.data?.userInfor?.followeeId.length} Followers
        </span>{" "}
        <span style={{ padding: "0px 5px" }}>
          {userinfo?.data?.userInfor?.followerId.length} Following{" "}
        </span>
      </div>
      <Modall />
      <div className="informations">
        <div className="informations-by-user"></div>
        {id === user.result?._id && <Post />}
        {!userposts?.data?.PostbyUser?.length && (
          <div>
            <h3>No Post To View</h3>
            <img src={img4} style={{ width: "300px" }} />
          </div>
        )}
        {userposts?.data?.PostbyUser?.map((userpost) => (
          <Feed {...userpost} />
        ))}
      </div>
    </Main>
  );
};

export default UserProfile;

const Main = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .informations {
    max-width: 800px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .follow {

    span {
      border: solid 2.5px;
      border-image-source: linear-gradient(to bottom right,rgb(13 110 253 / 25%),#f8f9fa);
      border-image-slice: 4;
    }
    margin-bottom: 10px;
  }
  .images {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-bottom: 85px;
    .profile_photo {
      width: 130px;
      position: absolute;
      height: 130px;
      top: 200px;
      left: 45%;
      border-radius: 50%;

      @media (max-width: 500px) {
        left: 35%;
      }
    }
    .cover-photo {
      position: relative;
      width: 500px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
