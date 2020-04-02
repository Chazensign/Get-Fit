import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const LoadingModal = () => {
  return (
    <StyledLoading>
      <h2>Loading</h2>
      <ReactLoading type='spin' color='#d6d6d6' height='100%' width='100%'/>
    </StyledLoading>
  )
}
 
export default LoadingModal;

const StyledLoading = styled.div`
width: 200px;
height: 250px;
padding: 20px;
border-radius: 8px;
`