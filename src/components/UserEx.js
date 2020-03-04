import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'

const UserEx = () => {

  const [userExercises, updateUserExercises] = useState([])

useEffect(() => {
  axios.get('/api/userex')
})

  return ( 
    <div>

    </div>
   );
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(UserEx)