import React from 'react'
import styled from 'styled-components'

const textimg = ({ Icon, text }) => {

    return (
        <Textimg>
            < Icon className='icons' />
            <h1>{text}</h1>
        </Textimg>
    )
}

export default textimg

const Textimg = styled.div`
height: 8vh;
width: auto;


display: flex;
justify-content: flex-start;
align-items: center;
h1 {
    font-size: 15px;

}

margin-left: 20px;
.icons {
    width: 17px;
    object-fit: contain;
    height: auto;
    color: blue;
    cursor: pointer;
    transform: scale(1);
    margin-right: 14px;


}
@media (max-width: 600px) {
    h1{
        display: none;
    }
}
`