import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import Register from './Register'
import styled from 'styled-components'
import ResetPassword from './ResetPassword'

const Header = (props) => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const showModal = (modal, e) => {
    e.preventDefault()
    setShowPassword()
    setShowRegister()
    setShowLogin()
    if (modal === 'pass') setShowPassword(prevState => !prevState)
    else if (modal === 'reg') setShowRegister(prevState => !prevState)
    else if (modal === 'log') setShowLogin(prevState => !prevState)
  }

  return (
    <>
      <HeaderStyle>
        <Link to='/'>
          <h1 style={{ opacity: 1 }} className='title'>
            GET FIT
          </h1>
        </Link>
        <nav>
          {props.username ? (
            <Link to='/profile'>
              <div className='nav-link'>{props.username}</div>
            </Link>
          ) : (
            <div className='nav-link' onClick={(e) => showModal('log', e)}>
              Login/Register
            </div>
          )}
        </nav>
      {showLogin ? <Login showModal={showModal}/> : null }
        {showRegister ? <Register showModal={showModal}/> : null }
        {showPassword ? <ResetPassword showModal={showModal}/> : null }
      </HeaderStyle>
      
    </>
  )
}
 function mapStateToProps(reduxState) {
   return {
     userId: reduxState.userId,
     username: reduxState.username
   }
 }
 export default connect(mapStateToProps)(Header)
 const HeaderStyle = styled.header`
 background: rgba(255, 255, 255, .6);
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
.title {
  opacity: 1;
  color: black;
  font-size: 45px;
  font-family: 'Racing Sans One', cursive;
}
.nav-link {
  margin: 5px;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
}
.nav-link:hover {
  cursor: pointer;
  opacity: .6;
}
 `