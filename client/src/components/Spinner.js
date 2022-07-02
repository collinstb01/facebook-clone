import React from 'react'
import {Spinner} from "react-bootstrap"
import styled from 'styled-components'

const Spinnerr = ({text}) => {
  return (
    <Main>
        <Spinner animation="grow" variant="primary"/>
        <p>Loading {text}...</p>
    </Main>
  )
}

export default Spinnerr

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
width: 100%;
height: auto;
`