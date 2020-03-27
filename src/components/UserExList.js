import React from 'react';
import { connect } from 'react-redux'
import ExListDisp from './ExListDisp'
import { Redirect } from 'react-router-dom'

const UserExList = (props) => {
  if (props.location.state === undefined) {
    return <Redirect to='/' />
  }

  const { group } = props.location.state
  const { userExs } = props

  return group ? (
    <main>
      <ExListDisp
        filteredEx={userExs.filter(ex => ex.majormuscle === group)}
        userList={true}
        saved={true}
        group={group}
      />
    </main>
  ) : (
    <Redirect to='/' />
  )
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExs: reduxState.userExercises
  }
}
export default connect(mapStateToProps)(UserExList)
