import React from 'react';
import { connect } from 'react-redux'
import ExListDisp from './ExListDisp'

const UserExList = (props) => {

  var group = props.location.state.group
  const groupExs = props.userExercises.filter(ex => ex.majormuscle === group)

  return (
    <main>
      <ExListDisp
        filteredEx={groupExs}
        userList={true}
        saved={true}
        group={group}
      />
    </main>
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
