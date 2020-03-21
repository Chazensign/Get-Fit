import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { setUser } from '../ducks/reducer'
import { connect } from 'react-redux'
import { useState } from 'react'
import AppButton from './AppButton'

const Login = (props) => {

  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

const userLogin = () => {
  axios.post('/api/user', { email, password })
  .then(res => {
    props.setUser(res.data)
    updateEmail('')
    updatePassword('')
    props.updateShowLogin()
  })
  .catch(err => alert(err.request.responseText))
}

  return (
    <LoginModal>
      <div className='login-box'>
        <h2>Login</h2>
        <input
          onChange={e => updateEmail(e.target.value)}
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={e => updatePassword(e.target.value)}
          type='text'
          name='password'
          placeholder='Password'
        />
        <div
          onClick={() => props.updateShowRegister(true)}
          className='register-link'>
          To Register Click Here
        </div>
        <div className='button-cont'>
          <AppButton name='Submit' onClick={userLogin} />
          <AppButton
            name='Cancel'
            onClick={() => props.updateShowLogin()}
          />
        </div>
      </div>
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
  }
  .login-box h2 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .login-box input {
    width: 250px;
  }
  .register-link {
    color: blue;
  }
  .button-cont {
    display: flex;
  }
`
