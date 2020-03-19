import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import ExListDisp from './ExListDisp'
import AppButton from './ExDetails/AppButton'
import icons from './icons/Icons'

const UserExList = (props) => {
  icons()
  var group = props.location.state.group
  const groupExs = props.userExercises.filter(ex => ex.majormuscle === group)

  function toExercises() {
    const location = {
      pathname: `/`,
      state: { group: group }
    }
    props.history.push(location)
  }

  return (
    <UserList>
      <div className='title-icon'>
        <h1>{group}</h1>
        <img className='group-png' src={window[group.toLowerCase()]} alt='' />
      </div>
      <ExListDisp
        filteredEx={groupExs}
        userList={true}
        saved={true}
        group={group}
      />
      <AppButton name='Find New' onClick={() => toExercises()} />
    </UserList>
  )
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExercises: reduxState.userExercises
  }
}
export default connect(mapStateToProps)(UserExList)

const UserList = styled.main`
  padding-top: 60px;
  width: 100%;
  .title-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 42px;
      font-family: 'Racing Sans One', cursive;
      margin: 10px 10px;
    }
    .group-png {
      height: 50px;
    }
  }
`