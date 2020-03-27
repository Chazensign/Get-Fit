import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { setUser } from '../ducks/reducer'
import AppButton from './AppButton'

const Register = props => {
  const [email, updateEmail] = useState('')
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  const [password2, updatePassword2] = useState('')

  const registerUser = () => {
    if (password === password2) {
      axios
        .post('/api/register', { email, username, password })
        .then(res => {
          alert('Account created, you have been logged in.')
          setUser(res.data)
          props.updateShowRegister(false)
        })
        .catch(err => console.log(err))
    } else {
      alert("Passwords don't match.")
    }
  }

  return (
    <RegisterView>
      <div className='register-box'>
        <h2>Register</h2>
        <div>
          <h3>Email</h3>
          <input
            className='reg-in'
            onChange={e => updateEmail(e.target.value)}
            type='password'
          />
        </div>
        <div>
          <h3>Username</h3>
          <input
            className='reg-in'
            onChange={e => updateUsername(e.target.value)}
            type='password'
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            className='reg-in'
            onChange={e => updatePassword(e.target.value)}
            type='password'
          />
        </div>
        <div>
          <h3>Confirm Password</h3>
          <input
            className='reg-in'
            onChange={e => updatePassword2(e.target.value)}
            type='password'
          />
        </div>
        <div className='button-cont'>
          <AppButton name='Register' onClick={registerUser} />
          <AppButton
            name='Cancel'
            onClick={() => props.updateShowRegister(false)}
          />
        </div>
      </div>
    </RegisterView>
  )
}

export default Register

const RegisterView = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 2;
  .register-box {
    padding: 20px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 350px;
    background: white;
    position: fixed;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .reg-in {
      border: 1px inset lightgray;
      padding-left: 5px;
      margin: 3px 0 8px 0;
      font-size: 14px;
      width: 100%;
    }
    div h3 {
      width: 240px;
      margin-left: 10px;
    }
  }
  .button-cont {
    display: flex;
    justify-content: space-between;
  }
`
