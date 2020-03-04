import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login'
import { connect } from 'react-redux'
import Register from '../Register'

const Header = (props) => {

  const [showLogin, updateShowLogin] = useState(false)
  const [showRegister, updateShowRegister] = useState(false)

  return (
    <>
      <header>
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
            <div className='nav-link' onClick={() => updateShowLogin(true)}>
              Login/Register
            </div>
          )}
        </nav>
      </header>
      {showLogin && !showRegister ? (
        <Login
          updateShowRegister={updateShowRegister}
          updateShowLogin={updateShowLogin}
        />
      ) : (
        showRegister && <Register updateShowRegister={updateShowRegister} />
      )}
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