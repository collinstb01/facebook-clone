import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Feed from './Feed'

const Feeds = () => {
    const { posts } = useSelector((state) => state.posts);

    console.log(posts)
    return (
        <FeedContainer>
            {posts.map((feeds) => (
                < Feed key={feeds._id} feeds={feeds} />
            ))}
        </FeedContainer>
    )
}

export default Feeds

const FeedContainer = styled.div`
height: fit-content;
width: 100%;
`