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
import { getuserinfo } from "../../actions/userinfo";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { userposts } = useSelector((state) => state.posts);
  const { message, userinfo } = useSelector((state) => state.userinfo);
  console.log(userinfo)
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  console.log(userposts?.data?.PostbyUser);

  useEffect(() => {
    dispatch(getUserpost(id));
    dispatch(getuserinfo(id))
  }, [id, message]);
  const text = userinfo?.data?.userInfor?.name?.charAt(0);
  return (
    <Main>
      <Navbar />
      <div className="images">
        <div className="cover-photo">
          <img src={img} />
        </div>
        {
         userinfo?.data?.userInfor?.profileImg ?  < img className="profile_photo" src={userinfo?.data?.userInfor?.profileImg} /> : <div className="profile_photo"><UserDummy className="profile_photo" text={text} /></div>
        }
      </div>
      <h1>{userinfo?.data?.userInfor?.name}</h1>
      <p>{userinfo?.data?.userInfor?.bio ? userinfo?.data?.userInfor?.bio : "Enter Your Bio"}</p>
      < Modall />
      <div className="informations">
        <div className="informations-by-user"></div>
        <Post />
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

    @media (max-width: 800px){
        width: 100%;
    }
  }
  .images {
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

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
