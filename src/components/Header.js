import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import { setLoading, setUser } from '../ducks/reducer'
import LoadingModal from './LoadingModal'
import Register from './Register'
import styled from 'styled-components'
import ResetPassword from './ResetPassword'

const Header = (props) => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const showModal = (modal, e) => {
    if (e) e.preventDefault()
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
            <div className='nav-link' onClick={e => showModal('log', e)}>
              Login/Register
            </div>
          )}
        </nav>
        {showLogin && (
          <Login
            setLoading={props.setLoading}
            setUser={props.setUser}
            showModal={showModal}
          />
        )}
        {showRegister && (
          <Register
            setLoading={props.setLoading}
            setUser={props.setUser}
            showModal={showModal}
            user={{username: props.username, userEmail: props.userEmail, userId: props.userId}}
          />
        )}
        {showPassword && (
          <ResetPassword
            setUser={props.setUser}
            setLoading={props.setLoading}
            showModal={showModal}
          />
        )}
      </HeaderStyle>
      {props.loading && <LoadingModal />}
    </>
  )
}
 function mapStateToProps(reduxState) {
   return {
     userId: reduxState.userId,
     username: reduxState.username,
     userEmail: reduxState.userEmail,
     loading: reduxState.loading
   }
 }
 export default connect(mapStateToProps, {setLoading, setUser})(Header)
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