import React from 'react'
import {Spinner} from "react-bootstrap"
import styled from 'styled-components'

const Spinnerr = () => {
  return (
    <Main>
        <Spinner animation="grow" variant="primary"/>
    </Main>
  )
}

export default Spinnerr

const Main = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
width: 100%;
height: 100vh;
`