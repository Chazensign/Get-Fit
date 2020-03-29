import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppButton from './AppButton'
import styled from 'styled-components'
import icons from './icons/Icons'


function ExListDisp (props) { 
  icons()
  let {filteredEx, group} = props
 
  function goBack() {
    if (props.saved) {
      props.history.push('/profile')
    } else {
      props.history.push('/')
    }
  }

  function toExercises() {
    const location = {
      pathname: `/exercises`,
      state: { group: group }
    }
    props.history.push(location)
  }

  function toInputs() {
    if (props.userId) {
      const location = {
        pathname: '/add/exercise',
        state: { group: group }
      }
    props.history.push(location)
    }else {
      alert('Please login')
    }
  }

  return (
    <ExListStyle>
      <div className='group-icon'>
        <h1>{group}</h1>
        <img className='group-png' src={window[group.toLowerCase()]} alt='' />
      </div>
      <ol>
        {filteredEx.map(ex => {
          return (
            <Link
              key={ex.ex_id}
              to={{
                pathname: `/exercise/details`,
                state: { exercise: ex }
              }}>
              <li className='link-list'>{ex.exercise}</li>
            </Link>
          )
        })}
      </ol>
      <div className='buttons'>
        {!props.saved ?
          <AppButton className='add-button' name='Create' onClick={toInputs} />
          :
          <AppButton name='Find New' onClick={() => toExercises()} />
        }
        <AppButton
          className='back-button'
          name='Back'
          onClick={() => goBack()}
        />
      </div>
    </ExListStyle>
  )
}
 
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExercises: reduxState.userExercises
  }
}
export default connect(mapStateToProps)(withRouter(ExListDisp))

const ExListStyle = styled.main`
  position: relative;
  height: 100vh;
  padding: 110px 10px 70px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: lightgray;
  .group-icon {
    position: absolute;
    top: 59px;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 42px;
      font-family: 'Racing Sans One', cursive;
    }
    .group-png {
      height: 50px;
    }
  }
  h2 {
    padding: 8px 0 0 8px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Racing Sans One', cursive;
  }
  ol {
    margin: 0;
    height: 100%;
    width: 100%;
    background: white;
    overflow: scroll;
    font-family: 'Racing Sans One', cursive !important;
    font-size: 20px;
  }
  .link-list {
    font-family: 'Nunito', sans-serif;
    padding: 10px;
  }
  .buttons {
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: flex;
    justify-content: space-around;
  }
`