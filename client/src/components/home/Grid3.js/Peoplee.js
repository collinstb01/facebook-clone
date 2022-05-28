import React from 'react'
import styled from 'styled-components'

const Peoplee = ({ Icon, text }) => {
    return (
        <Peopleee>
            < img src={Icon} />
            <h1>{text}</h1>
        </Peopleee>
    )
}

export default Peoplee

const Peopleee = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 10vh;
margin-left: 50%;

img {
    width: fit-content;
    height: 5vh;
    border-radius: 300px;
    margin-right: 5%;
}
h1 {
    font-size: 15px;
}
`