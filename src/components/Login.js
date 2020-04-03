import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AppButton from './AppButton'

const Login = props => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const userLogin = (e) => {
    e.preventDefault()
    const check = document.getElementById('login-form').checkValidity()
    if (check) {
      props.setLoading(true)
      axios
        .post('/api/user', { email, password })
        .then(res => {
          props.setUser(res.data)
          updateEmail('')
          updatePassword('')
          props.setLoading(false)
          props.showModal(false)
        })
        .catch(err => {
          alert(err.response.data)
          props.setLoading(false)
        })
    }
  }

  return (
    <LoginModal>
        <form id='login-form' className='login-box'>
        <h2>Login</h2>
          <div>
            <label htmlFor='login-email'>Email</label>
            <input
              required
              id='login-email'
              className='log-in'
              onChange={e => updateEmail(e.target.value)}
              type='email'
              name='email'
              placeholder='user@site.com'
            />
          </div>
          <div>
            <label htmlFor='login-pass'>Password</label>
            <input
              required
              id='login-pass'
              className='log-in'
              onChange={e => updatePassword(e.target.value)}
              type='password'
              name='password'
            />
          </div>
          <a
            href='register'
            onClick={e => {
              props.showModal('reg', e)
            }}
            className='register-link'>
            Register
          </a>
          <a
            href='reset password'
            onClick={e => {
              props.showModal('pass', e)
            }}
            className='register-link'>
            Forgot Password?
          </a>
          <div className='button-cont'>
            <AppButton name='Submit' onClick={(e) => userLogin(e)} />
            <AppButton name='Cancel' onClick={e => props.showModal(null, e)} />
          </div>
        </form>
    </LoginModal>
  )
}

export default Login

const LoginModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.62);
  z-index: 2;
  .login-box {
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 275px;
    height: 300px;
    background: white;
    position: fixed;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      font-family: 'Racing Sans One', cursive;
    }
    .log-in {
      border: 1px inset lightgray;
      padding-left: 5px;
      margin: 3px 0 8px 0;
      font-size: 14px;
      width: 100%;
      height: 30px;
    }
    div label {
      font-weight: bold;
      color: #525252;
      width: 100%;
      margin-left: 10px;
    }
  }
  .register-link {
    color: blue;
  }
  .button-cont {
    display: flex;
    justify-content: space-between;
  }
`
