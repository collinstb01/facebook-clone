import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSection from './ImageSection'
import { useDispatch, useSelector } from 'react-redux'
import { getalluserinfo } from '../../../../actions/userinfo'
import HistoriesLoader from '../../../imageSkeleton'

const Imagesections = () => {
    const {alluserinfo} = useSelector((state) => state.userinfo)
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
      }, [dispatch]);
    if (!unique1)   {
        return <HistoriesLoader />
    }
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
