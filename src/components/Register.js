import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AppButton from './AppButton'

const Register = props => {
  console.log(props)
  
  const [email, setEmail] = useState(props.user.userId ? props.user.userEmail : '')
  const [usernameInput, setUsername] = useState(props.user.userId ? props.user.username : '')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const registerUser = e => {
    const check = document.getElementById('register-form').checkValidity()
    if (check) {
      if (password === password2) {
        props.setLoading(true)
        axios
          .post('/api/register', { email, usernameInput, password })
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

  const updateUser = (e) => {
    const check = document.getElementById('register-form').checkValidity()
    if (password !== password2) return alert("Passwords don't match")
    const { userId, userEmail } = props.user
      if (check && userId) {
        props.setLoading(true)
        axios
          .put('/api/user', {username: usernameInput, newEmail: email, oldEmail: userEmail, password})
          .then(res => {
            props.setUser(res.data)
            setEmail()
            setUsername()
            setPassword()
            setPassword2()
            props.setLoading(false)
            props.showModal('reg', e)
        })
      }
  }

  return (
    <RegisterView>
      <form id='register-form' className='register-box'>
        <h2>Register</h2>
        <div>
          <label htmlFor='reg-email'>Email</label>
          <input
            required
            id='reg-email'
            className='reg-in'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            required
            id='username'
            className='reg-in'
            name='usernameInput'
            value={usernameInput}
            onChange={e => setUsername(e.target.value)}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='reg-pass'>Password</label>
          <input
            required={props.user.userId ? false : true}
            id='reg-pass'
            className='reg-in'
            name='password'
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <div>
          <label htmlFor='pass2'>Confirm Password</label>
          <input
            required={password ? true : false}
            id='pass2'
            className='reg-in'
            name='password2'
            onChange={e => setPassword2(e.target.value)}
            type='password'
          />
        </div>
        <div className='button-cont'>
          <AppButton name={props.user.userId ? 'Submit' : 'Register'} onClick={e => props.user.userId ? updateUser(e) : registerUser(e)} />
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
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 275px;
    height: 350px;
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
    .reg-in {
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
  .button-cont {
    display: flex;
    justify-content: space-between;
  }
`
