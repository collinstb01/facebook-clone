import React from 'react'
import styled from 'styled-components'


const Postt = ({ Icon, text }, Color) => {

    return (
        <Posttt>
            <div className="icon">
                < Icon className={` icons`} />
            </div>
            <h3>{text}</h3>
        </Posttt>
    )
}

export default Postt

const Posttt = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 33.3%;

font-size: 10px;

.icon {
    width: 100%;
    height: 10vh;
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.icons {
     width: 10%;
    color: Color;
}
 
`