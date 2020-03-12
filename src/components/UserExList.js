import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import ExListDisp from './ExList/ExListDisp'

const UserExList = (props) => {

  const [userExercises, updateUserExercises] = useState([])
  const { group } = props.match.params

useEffect(() => {
  axios
    .get(
      `/api/user/exercises?group=${group}&user=${props.userId}`
    )
    .then(res => {
      updateUserExercises(res.data)
    })
    .catch(err => console.log(err)
    )
}, [group, props.userId])

  return ( 
    <UserList>
      <ExListDisp filteredEx={userExercises} userId={props.userId} />
    </UserList>
   );
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