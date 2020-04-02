import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { setUser } from '../ducks/reducer'
import { connect } from 'react-redux'
import AppButton from './AppButton'

const Login = props => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const userLogin = () => {
    const check = document.getElementById('login-form').checkValidity()
    if (check) {
      axios
        .post('/api/user', { email, password })
        .then(res => {
          props.setUser(res.data)
          updateEmail('')
          updatePassword('')
          props.showModal()
        })
        .catch(err => alert(err.request.responseText))
    }
  }

  return (
    <LoginModal>
        <form id='login-form' className='login-box'>
        <h2>Login</h2>
          <div>
            <h3>Email</h3>
            <input
              required
              className='log-in'
              onChange={e => updateEmail(e.target.value)}
              type='email'
              name='email'
              placeholder='user@site.com'
            />
          </div>
          <div>
            <h3>Password</h3>
            <input
              required
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
            To Register Click Here
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
            <AppButton name='Submit' onClick={userLogin} />
            <AppButton name='Cancel' onClick={e => props.showModal(null, e)} />
          </div>
        </form>
    </LoginModal>
  )
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, { setUser })(Login)

const LoginModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.62);
  z-index: 2;
  .login-box {
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
    h2 {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .log-in {
      border: 1px inset lightgray;
      padding-left: 5px;
      margin: 3px 0 8px 0;
      font-size: 14px;
      width: 250px;
    }
    div h3 {
      width: 240px;
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
