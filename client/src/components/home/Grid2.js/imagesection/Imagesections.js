import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSection from './ImageSection'
import Img1 from '../../../../images/1.jpg'
import Img2 from '../../../../images/2.jpg'
import Img3 from '../../../../images/3.jpg'
import Img4 from '../../../../images/4.jpg'
import Img5 from '../../../../images/5.jpg'
import Img6 from '../../../../images/6.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getalluserinfo } from '../../../../actions/userinfo'

const Imagesections = () => {
    const {alluserinfo} = useSelector((state) => state.userinfo)
    console.log(alluserinfo)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))
    
    const newArray = []
    const unique = alluserinfo?.data?.userInfor?.filter((cal) => {
        const unique2 = newArray.includes(cal.creator)

        if (!unique2) {
            newArray.push(cal.creator)

            return true
        }
        return false
    })
    const unique1 = unique?.filter((val) => val.creator !== user?.result?._id)
    useEffect(() => {
        dispatch(getalluserinfo())
    }, [])
    return (
        <ImageSectionn>
          {
           unique1?.map((e,i) => 
            <ImageSection {...e}  key={i}/>
           )
          }
        </ImageSectionn>
    )
}

export default Imagesections

const ImageSectionn = styled.div`
height:fit-content;
width: 100%;
flex-wrap: nowrap;
display: flex;
overflow: auto;
justify-content: flex-start;
background-color: #faf9f6;
@media (max-width: 900px) {
 height: 90px;   
}
`
