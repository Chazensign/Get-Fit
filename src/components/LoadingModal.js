import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const LoadingModal = () => {
  return (
    <StyledLoading>
      <div className='loading-cont'>
      <h2>Loading</h2>
      <ReactLoading type='spin' color='#d6d6d6' height='90%' width='90%'/>
      </div>
    </StyledLoading>
  )
}
 
export default LoadingModal;

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 4;
  .loading-cont {
    width: 200px;
    height: 250px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      width: 100%;
      text-align: center;
      font-size: 38px;
      font-family: 'Racing Sans One', cursive;
      margin-bottom: 20px;
    }
  }
`