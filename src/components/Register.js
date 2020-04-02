import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AppButton from './AppButton'

const Register = props => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const registerUser = e => {
    const check = document.getElementById('register-form').checkValidity()
    if (check) {
      if (password === password2) {
        props.setLoading(true)
        axios
          .post('/api/register', { email, username, password })
          .then(res => {
            alert('Account created, you have been logged in.')
            props.setUser(res.data)
            setEmail()
            setUsername()
            setPassword()
            setPassword2()
            props.setLoading(false)
            props.showModal(null, e)
          })
          .catch(err => console.log(err))
      } else {
        alert("Passwords don't match.")
      }
    }
  }

  return (
    <RegisterView>
      <form id='register-form' className='register-box'>
        <h2>Register</h2>
        <div>
          <h3>Email</h3>
          <input
            required
            className='reg-in'
            name='email'
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div>
          <h3>Username</h3>
          <input
            required
            className='reg-in'
            name='username'
            onChange={e => setUsername(e.target.value)}
            type='text'
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            required
            className='reg-in'
            name='password'
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <div>
          <h3>Confirm Password</h3>
          <input
            required
            className='reg-in'
            name='password2'
            onChange={e => setPassword2(e.target.value)}
            type='password'
          />
        </div>
        <div className='button-cont'>
          <AppButton name='Register' onClick={e => registerUser(e)} />
          <AppButton name='Cancel' onClick={e => props.showModal(null, e)} />
        </div>
      </form>
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
