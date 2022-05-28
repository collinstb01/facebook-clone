import React, { useState } from 'react'
import styled from 'styled-components'
import Postt from './Postt'
import { FaVideo } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

import FileBase from 'react-file-base64';
import { createpost, getposts } from '../../../../actions/posts'

const Post = () => {
    const [postData, setPostData] = useState({ message: '', selectedFile: '' });
    const [input, setInput] = useState(false);
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))
    const id = user?.result?._id

    const showButton = () => {
        setInput((e) => !e)
    }

    const Posts = (e) => {
        e.preventDefault();

        setInput(false)
        dispatch(createpost({ ...postData, name: user?.result?.name, creator: id }));

        // dispatch(updatepost(currentId, { ...postData, name: user?.result?.name }));
        // //   clear();
    }
    return (
        <Navv>
            <NavvCtn1>
                <Avatar />
                <Input placeholder='Whats on your mind, Dommy Name' onClick={showButton}
                    name="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <div className="fileInput"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                {input && <button onClick={Posts}>Post</button>}
            </NavvCtn1>
            <NavvCtn2>
                <Postt Icon={FaVideo} text='Live Video' />
                <Postt Icon={AiOutlineSearch} text='Photo/Video' />
                <Postt Icon={BiDotsHorizontalRounded} text='Feeling Activity' />
            </NavvCtn2>
        </Navv>
    )
}

export default Post

const Navv = styled.div`
margin: 20px 0px;
height: 20vh;
width: 100%;
border-radius: 10px;

background-color: white;

`
const NavvCtn1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid black;

width: 100%;
height: 10vh;

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
    transition: all .3s ease;
}
button:hover{
    opacity: 1;
}
`
const NavvCtn2 = styled.div`
display: flex;

width: 100%;
height: 10vh;
`
const Avatar = styled.img`
background-color: black;
height: 5vh;

border-radius: 50%;
width: 5vh;
margin-right: 10px;
`
const Input = styled.input`
display: flex;
flex: 0.8;
border-radius: 10px;
border: none;
background-color: #faf9f6;

outline: 55px blue;
padding: 15px;
`