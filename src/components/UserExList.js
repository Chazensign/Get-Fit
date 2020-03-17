import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import ExListDisp from './ExListDisp'
import AppButton from './ExDetails/AppButton'
import chest from './icons/chest.png'
import back from './icons/back.png'
import shoulders from './icons/shoulders.png'
import arm from './icons/arm.png'
import leg from './icons/leg.png'
import core from './icons/core.png'

const UserExList = (props) => {

  var group = props.location.state.group
  var groupName = group.toLowerCase()
  var groupPng = window[groupName]
   console.log(groupPng)
   
  
  const groupExs = props.userExercises.filter(ex => ex.majormuscle === group)
  return (
    <UserList>
      <h1>{group}</h1>
      <img className='group-png' src={window[group.toLowerCase()]} alt='' />
      <ExListDisp filteredEx={groupExs} userId={props.userId} saved={true} />
      <AppButton name='Find New' />
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
`