import react, { useState } from 'react'
import styled from "styled-components"
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { BsFlag } from 'react-icons/bs'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { GiDiceSixFacesFour } from 'react-icons/gi'
import { AiFillMessage } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    return (
        <Navbarr>
            <NavbarGrid>
                <Grid1>
                    <div className="Grid1Ctn">
                        <div className="Grid1Icon">
                            <FaFacebook className="icons" />
                        </div>
                        <div className='searchbar'>
                            <AiOutlineSearch className="icons" />
                            <input className='searchtext' placeholder="search facebook" />
                        </div>
                    </div>
                </Grid1>
                <Grid2>
                    <div className="Grid2ctn">
                        < AiFillHome className='icons' />
                        < BsFlag className='icons icon' />
                        < AiOutlinePlayCircle className='icons icon' />
                        < AiOutlineShoppingCart className='icons icon' />
                        < IoIosPeople className='icons icon' />
                    </div>
                </Grid2>
                <Grid3>
                    <img />
                    <Link to='/userProfile' >
                        <h1>{user?.result?.name}</h1>
                    </Link>
                    < GiDiceSixFacesFour className="icons" />
                    < AiFillMessage className="icons" />
                    < BsFillBellFill className="icons" />
                    < FaVideo className="icons" />
                </Grid3>
            </NavbarGrid>
        </Navbarr>
    )
}

export default Navbar

const Navbarr = styled.div`
background-color: white;
box-shadow: 5px 5px  5px   rgba(41, 28, 28, 0.473);
width: 100%;
height: 10vh;

`

const NavbarGrid = styled.div`
width: 100%;
height: 10vh;

display: flex;
flex: 1;
flex-direction: row;
justify-content: center;
align-items: center;

.icons {
    width: 10%;
    height: auto;
    color: blue;
    cursor: pointer;
    transform: scale(1);

}
.icons:hover {
    transform: scale(1.1);
}

`

const Grid1 = styled.div`
width: 25%;

display: flex;
flex-direction: row;
justify-content: left;
align-items: center;

.Grid1Ctn {
    width: 100%;
    display: flex;
justify-content: flex-start;
align-items: center;
}
.Grid1Icon {
    width: 14%;

    @media (max-width: 700px) {
    width: 17%;
    }
}
.searchbar {
    width: 80%;
    height: 3vh;
    margin-left: 0px;
    background-color: #faf9f6;
    border-radius: 10px;
    padding: 6px;

    display: flex;
}
.searchtext {
    outline: none;
    border: none;
    background-color: transparent;
}
 .icons {
     margin: 0px 10px;
     width: 100%;
 }
@media (max-width: 700px) {
    .searchbar {
        display: none;
    }
}
`

const Grid2 = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 50%;
height: 10vh;
.Grid2ctn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}
.icons {
    width: 24px;
}
.icon {
  color: rgb(92, 92, 117);
}
`

const Grid3 = styled.div`
display: flex;
width: 25%;

justify-content: center;
align-items: center;

font-size: 10px;

.icons {
    border-radius: 50%;
    background-color: #faf9f6;
    color: rgb(92, 92, 117);
    width: 7%;
    margin: 0px 10px;
    padding: 10px;
    
}

@media (max-width: 1030px) {
 .icons {
    display: none;
 }   
}
`
