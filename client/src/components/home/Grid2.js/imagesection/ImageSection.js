import React from 'react'
import styled from 'styled-components'

const ImageSection = ({ Icon, text }) => {
  return (
    <ImageSectionn>
      <img src={Icon} />
      <h3>{text}</h3>
    </ImageSectionn>
  )
}

export default ImageSection

const ImageSectionn = styled.div`
min-height: 30vh;

margin: 0 10px;
border-radius: 10px;

display: flex;
flex-direction: column;
position: relative;

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

}
img:hover{
    animation: animate1 1s  infinite;
    transform: scale(1.1);
  transition: all .6s ease-in-out;
}
@keyframes animate1 {
  0% {
    opacity: 0.7;
  }
  50% {
     opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
 
h3 {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  color: white;
  font-size: 13px;
  text-shadow: 1px 1px 1px black;
}
 @media (max-width: 900px) {
     img {
       border-radius: 50%;
       object-fit: contain;
       width: 120%;
        height: 20vh;
     }
}
`