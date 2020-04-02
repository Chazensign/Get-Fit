import React, { useState } from 'react'
import AppButton from './AppButton'
import styled from 'styled-components'
import axios from 'axios'

const ResetPassword = (props) => {

  const [email, setEmail] = useState('')

const submitReset = (e) => {
  const check = document.getElementById('reset-form').checkValidity()
  if (check) {
    axios
    .post('/api/user/password', {email})
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}

  return (
    <PasswordModal>
      <section className='input-cont'>
        <form id='reset-form'>
          <input
            required
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className='button-cont'>
            <AppButton name='Submit' onClick={submitReset} />
            <AppButton name='Cancel' onClick={e => props.showModal(null, e)} />
          </div>
        </form>
      </section>
    </PasswordModal>
  )
}
 
export default ResetPassword;

const PasswordModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.62);
  z-index: 2;
  .input-cont {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    background: white;
    position: fixed;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  .button-cont {
    display: flex;
    justify-content: space-between;
  }
  }
`