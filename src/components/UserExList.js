import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import ExListDisp from './ExListDisp'
import AppButton from './ExDetails/AppButton'

const UserExList = (props) => {
  const userExercises = props.location.state.exercises
  return ( 
    <UserList>
      <ExListDisp filteredEx={userExercises} userId={props.userId} saved={true}/>
      <AppButton name='Find New' />
    </UserList>
   )
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(UserExList)

const UserList = styled.main`
padding-top: 60px;
width: 100%;
`