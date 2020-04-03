import React, { useState } from 'react'
import AppButton from './AppButton'
import styled from 'styled-components'
import axios from 'axios'

const ResetPassword = (props) => {

  const [email, setEmail] = useState('')
  const [showTempInput, setTempInput] = useState(false)
  const [tempPassword, setTempPassword] = useState('')


const submitReset = (e) => {
  const check = document.getElementById('reset-form').checkValidity()
  //Runs if user has temp password
  if (showTempInput && check) {
    props.setLoading(true)
    axios.post('/api/user', {email, tempPassword})
    .then(res => {
      props.setUser(res.data)
      setEmail('')
      setTempPassword('')
      props.setLoading(false)
      props.showModal('reg')
    })
    .catch(err => {
      console.log(err)
      props.setLoading(false)
    })
  }else if (check) {
    //Runs if user is getting temp password
    props.setLoading(true)
    axios
    .post('/api/user/password', {email})
    .then(res => {
      props.setLoading(false)
      alert('Temporary password sent, check your email.')
      setTempInput(true)
    }).catch(err => {
      console.log(err)
    })
  }
}
console.log(showTempInput)

  return (
    <PasswordModal>
      <section className='input-cont'>
        <h2>Password Reset</h2>
        <form id='reset-form'>
          <label htmlFor='email-reset'>Account Email:</label>
          <input
            required
            id='email-reset'
            className='log-in'
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {showTempInput ? (
            <>
              <label htmlFor='temp-pass-input'>Temporary Password:</label>
              <input
                required
                id='temp-pass-input'
                className='log-in'
                type='text'
                value={tempPassword}
                onChange={e => setTempPassword(e.target.value)}
              />
            </>
          ) : (
            <h3
              title='Click to use a temporary password'
              onClick={() => setTempInput(true)}
              className='register-link'>
              Have a temporary password?
            </h3>
          )}
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
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 275px;
    /* height: 300px; */
    background: white;
    position: fixed;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      width: 100%;
      text-align: center;
      font-size: 30px;
      font-family: 'Racing Sans One', cursive;
      margin-bottom: 15px;
    }
    label {
      font-weight: bold;
      color: #525252;
      width: 240px;
      margin-left: 10px;
    }
    .log-in {
      border: 1px inset lightgray;
      padding-left: 5px;
      margin: 3px 0 8px 0;
      font-size: 14px;
      width: 100%;
      height: 30px;
    }
    h3 {
      color: blue;
    }
    .button-cont {
      display: flex;
      justify-content: space-between;
    }
  }
`