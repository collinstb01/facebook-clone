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
justify-content: flex-start;
align-items: center;
height:auto;
padding-block: 10px;
margin-left: 50%;

img {
    width: 30px;
    height: 30px;
    border-radius: 300px;
    margin-right: 5%;
}
h1 {
    font-size: 12px;
}
`