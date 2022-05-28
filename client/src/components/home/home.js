import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextImg from './textimg'
import { FaUserFriends } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { FaTrain } from 'react-icons/fa'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import ImageSection from './Grid2.js/imagesection/Imagesections'
import Post from './Grid2.js/post/Post'
import Feed from './Grid2.js/feeds/Feeds'
import People from './Grid3.js/People'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getposts } from '../../actions/posts'
import { useDispatch } from 'react-redux'

const home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getposts());
    }, [dispatch]);

    const logOut = () => {
        dispatch({ type: "LOGOUT" })

        navigate("/auth")
        setUser(null)
    }
    return (
        <Homee>
            <HomeeGrid>
                <Grid1>
                    <div>
                        <img />
                        <h3>{user?.result?.name}</h3>
                    </div>
                    < TextImg Icon={FaUserFriends} text='Friends' />
                    < TextImg Icon={MdGroups} text='Groups' />
                    < TextImg Icon={BsFillBagCheckFill} text='Market Place' />
                    < TextImg Icon={FaTrain} text='Watch' />
                    < TextImg Icon={BsFillCalendar2EventFill} text='Event' />
                    < TextImg Icon={AiFillClockCircle} text='Memories' />
                    < TextImg Icon={RiArrowDropDownLine} text='See more' />
                    <Link to="/auth">
                        <h3 className="logout" onClick={logOut}>Log Out</h3>
                    </Link>
                </Grid1>
                <Grid2>
                    < ImageSection />
                    < Post currentId={currentId} setCurrentId={setCurrentId} />
                    < Feed currentId={currentId} setCurrentId={setCurrentId} />
                </Grid2>
                <Grid3>
                    <People />
                </Grid3>
            </HomeeGrid>
        </Homee>
    )
}

export default home

const Homee = styled.div`
height: 100vh;
width: 100%;


`
const HomeeGrid = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
position: sticky;
top: 0;

`
const Grid1 = styled.div`
flex: 0.25;

display: flex;
flex-direction: column;
justify-content: left;
position: sticky;
top: 0;
a{
    padding-left:30px;

}
@media (max-width: 600px) {
  flex: 0.1;
}@media (max-width: 430px) {
  display: none;
}
`

const Grid2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;

flex: 0.5;
background-color: #faf9f6;

 margin-top: 5vh;

 @media (max-width: 900px) {
   flex: 0.75; 
} @media (max-width: 600px) {
   flex: 0.9; 
}@media (max-width: 400px) {
   flex: 1; 
}
`

const Grid3 = styled.div`
display: flex;
flex: 0.25;

justify-content: flex-end;
margin-top: 5vh;

font-size: 10px;

@media (max-width: 900px) {
   display: none;
}
`