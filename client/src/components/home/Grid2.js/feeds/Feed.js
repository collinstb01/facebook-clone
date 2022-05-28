import react from 'react';
import Img2 from '../../../../images/2.jpg'
import styled from 'styled-components'

const Feed = ({ feeds }) => {

    return (
        <FeedContainer>
            <User>
                <UserProfileImg>
                    <UserImage src={Img2} />
                </UserProfileImg>
                <UserNameAndTimePosted>
                    <h3>{feeds.name}</h3>
                </UserNameAndTimePosted>
            </User>
            <UserInput>
                <h3>{feeds.message}</h3>
            </UserInput>
            <UserPostImg>
                <Img src={feeds.selectedFile} />
            </UserPostImg>
        </FeedContainer>
    )
}

export default Feed

const FeedContainer = styled.div`
height: 80vh;
width: 100%;

display: flex;
flex-direction: column;

background-color: white;
border-radius:20px;

margin-bottom: 140px;
`
const User = styled.div`
display: flex;
flex-direction: row;

height: 100vh;
width: 100%;
justify-content: flex-start;
align-items: center;


`
const UserNameAndTimePosted = styled.div`
display: flex;
flex-direction: row;

h3 {
margin-left: 20px;
}

`
const UserProfileImg = styled.div`
height: 5vh;
width: 5%;

`

const UserImage = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: fit-content;
margin: 0px 18px;
`
const UserInput = styled.div`
display: flex;
flex-direction: row;

margin-left: 15px;
font-size: 13px; 
`
const UserPostImg = styled.div`
display: flex;
flex-direction: row;

width: 100%;
height: 80vh;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`

