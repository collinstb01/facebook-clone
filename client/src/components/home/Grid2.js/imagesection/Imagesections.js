import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageSection from './ImageSection'
import { useDispatch, useSelector } from 'react-redux'
import { getalluserinfo } from '../../../../actions/userinfo'
import HistoriesLoader from '../../../imageSkeleton'
import Button from 'react-bootstrap/esm/Button'

const Imagesections = () => {
    const {alluserinfo} = useSelector((state) => state.userinfo)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))
    
    const newArray = []
    const unique = alluserinfo?.data?.userInfor?.filter((cal) => {
        const unique2 = newArray.includes(cal.creator)
        console.log(unique2)
        if (!unique2) {
            newArray.push(cal.creator)

            return true
        }
        return false
    })
    const unique1 = unique?.filter((val) => val.creator !== user?.result?._id)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("LOAD MORE USERS")

    useEffect(() => {
        dispatch(getalluserinfo(page))
      }, [dispatch, page]);
    
      useEffect(() => {
        if (alluserinfo?.data?.userInfor) {
            setLoading(false)
        }
      }, [alluserinfo?.data, page]);
     
    if (!unique1)   {
        return <HistoriesLoader />
    }

    const handleLoad = () => {
        setLoading(true)
        if (alluserinfo?.data?.userInfor?.length < 7) {
            setPage(1)
            dispatch(getalluserinfo(page))
            setMessage("No more Users, Refresh")
        return
        }
        setPage((e) => ++e)
        console.log(page)
    }
    return (
        <ImageSectionn>
          {
           unique1?.map((e,i) => 
            <ImageSection {...e}  key={i}/>
           )
          }
          {
            loading ? <Button onClick={handleLoad} className="button">Loading</Button>
            : 
          <Button onClick={handleLoad} className="button">{message}</Button>
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
.button {
    width: fit-content;
    height: fit-content;
    font-size: 8px;
    align-self: center;
}
`
