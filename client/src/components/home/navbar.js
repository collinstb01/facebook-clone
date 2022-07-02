import react, { useState } from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserpost } from "../../actions/posts";
import NotificationModal from "../modal/NotificationModal";
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const navigate = useNavigate();
  const id = user?.result?._id;
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(getUserpost(id));

    navigate(`/userProfile/${id}`);
  };
  const logout = () => {
      dispatch({ type: "LOGOUT" })

      navigate("/auth")
      setUser(null)
  }
  return (
    <Navbarr>
      <NavbarGrid>
        <Grid1>
          <div className="Grid1Ctn">
            <div className="Grid1Icon">
              <Link to="/">
                {" "}
                <FaFacebook className="icons" />
              </Link>{" "}
            </div>
            <div className="searchbar">
              <AiOutlineSearch className="icons" />
              <input className="searchtext" placeholder="search facebook" />
            </div>
          </div>
        </Grid1>
        <Grid2>
          <div className="Grid2ctn">
            <AiFillHome className="icons" />
            <BsFlag className="icons icon" />
            <AiOutlinePlayCircle className="icons icon" />
            <AiOutlineShoppingCart className="icons icon" />
            <IoIosPeople className="icons icon" />
          </div>
        </Grid2>
        <Grid3>
          <img />
       <div> 
        <div style={{display: "flex"}}>
        <h1 style={{marginRight: "10px"}} onClick={handle}>{user?.result?.name}</h1>
          <h1 style={{color: "blue"}} className="logout" onClick={logout}>Log Out</h1>
        </div>
          <NotificationModal />  
        </div>
        </Grid3>
      </NavbarGrid>
    </Navbarr>
  );
};

export default Navbar;

const Navbarr = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: -2px 2px 2px rgb(41 28 28 / 47%);
  height: auto;
  position: sticky;
  top: 0;
  z-index: 99999;
  padding: 10px 0px;
  @media (max-width: 600px) {
    padding: 20px 0px;
  }
  h1 {}
  .logout {
    display: none;
    @media (max-width: 500px) {
      display: initial;
    }
  }
`;

const NavbarGrid = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 4fr 4fr;
  }

  .icons:hover {
    transform: scale(1.1);
  }
`;

const Grid1 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;

  .Grid1Ctn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5px;
  }
  .Grid1Icon {
    width: 25px;
    @media (max-width: 700px) {
      width: 25px;
    }
  }
  .searchbar {
    padding: 10px 20px;
    background-color: #faf9f6;
    border-radius: 10px;

    display: flex;
  }
  .searchtext {
    outline: none;
    border: none;
    background-color: transparent;
  }
  .icons {
    width: 100%;
  }
  @media (max-width: 700px) {
    .searchbar {
      display: none;
    }
  }
`;

const Grid2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .Grid2ctn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icons {
    width: 15px;
  }
  .icon {
    color: rgb(92, 92, 117);
  }
`;

const Grid3 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 8px;

  h1 {
    font-size: 13px;
  }
  .icons {
    border-radius: 50%;
    background-color: #faf9f6;
    color: rgb(92, 92, 117);
  }

  @media (max-width: 1030px) {
    .icons {
      display: none;
    }
  }
`;
