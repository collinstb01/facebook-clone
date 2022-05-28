import React from 'react'
import styled from 'styled-components'
import ImageSection from './ImageSection'
import Img1 from '../../../../images/1.jpg'
import Img2 from '../../../../images/2.jpg'
import Img3 from '../../../../images/3.jpg'
import Img4 from '../../../../images/4.jpg'
import Img5 from '../../../../images/5.jpg'
import Img6 from '../../../../images/6.jpg'

const Imagesections = () => {
    return (
        <ImageSectionn>
            < ImageSection text='Bill Gate' Icon={Img2} />
            < ImageSection text='Larry Page' Icon={Img3} />
            < ImageSection text='Elon Musk' Icon={Img5} />
            < ImageSection text='Jef Bezzos' Icon={Img6} />
        </ImageSectionn>
    )
}

export default Imagesections

const ImageSectionn = styled.div`
height: 30vh;
width: 100%;

display: flex;
background-color: #faf9f6;

`
