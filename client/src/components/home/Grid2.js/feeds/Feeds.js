import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Feed from './Feed'

const Feeds = () => {
    const { posts } = useSelector((state) => state.posts);

    console.log(posts)
    return (
        <FeedContainer>
            {posts?.postMessages?.map((feeds) => (
                < Feed key={feeds._id} {...feeds} />
            ))}
        </FeedContainer>
    )
}

export default Feeds

const FeedContainer = styled.div`
height: auto;
width: 100%;
`