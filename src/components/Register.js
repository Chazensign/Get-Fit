import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { setUser } from '../ducks/reducer'
import AppButton from './AppButton'

const Register = (props) => {

const [email, updateEmail] = useState('')
const [username, updateUsername ] = useState('')
const [password, updatePassword] = useState('')
const [password2, updatePassword2] = useState('')

const registerUser = () => {
  if (password === password2) {
axios.post('/api/register', { email, username, password })
.then(res => {
  alert('Account created, you have been logged in.')
  setUser(res.data)
  props.updateShowRegister(false)
})
.catch(err => console.log(err)
)
  }
  else {
    alert("Passwords don't match.")
  }
}

  return (
    <RegisterView>
      <div className='register-box'>
        <h2>Register</h2>
        <input
          onChange={e => updateEmail(e.target.value)}
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={e => updateUsername(e.target.value)}
          type='text'
          placeholder='Username'
        />
        <input
          onChange={e => updatePassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <input
          onChange={e => updatePassword2(e.target.value)}
          type='password'
          placeholder='Confirm Password'
        />
        <div className='button-cont'>
        <AppButton name='Register' onClick={registerUser}/>
        <AppButton name='Cancel' onClick={() => props.updateShowRegister(false)}/>
        </div>
      </div>
    </RegisterView>
  )
}
 
export default Register;

const RegisterView = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 2;
  .register-box {
    padding: 15px;
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
  }
  .register-box h2 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .register-box input {
    width: 250px;
  }
  .button-cont {
    display: flex;
  }
`