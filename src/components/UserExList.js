import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
// import axios from 'axios'

const UserExList = (props) => {
console.log(props)

  // const [userExercises, updateUserExercises] = useState([])

// useEffect(() => {
//   axios.get(`/api/user/exercises?group=${props}&user=${}`)
// })

  return ( 
    <UserList>

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
width: 100%
`