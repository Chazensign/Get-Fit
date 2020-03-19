import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppButton from './ExDetails/AppButton'
import styled from 'styled-components'


function ExListDisp (props) { 
  
  let {filteredEx, group} = props
  
  function goBack() {
    if (props.saved) {
      props.history.push('/profile')
    } else {
      props.submit('', false)
    }
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
      <h2>{group}</h2>
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
        {!props.saved && 
              <AppButton className='add-button' name='Add New' onClick={toInputs}/>
        }
        <AppButton className='back-button' name='Back' onClick={() => goBack()}/>
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
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* .header-back {
    height: 60px;
    width: 100%;
    background: black;
    position: sticky;
    top: 0;
  } */
  h2 {
    padding: 8px 0 0 8px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Racing Sans One', cursive;
  }
  ol {
    font-family: 'Racing Sans One', cursive !important;
    font-size: 20px;
  }
  .link-list {
    font-family: 'Nunito', sans-serif;
    margin: 10px;
  }
  .add-button {
    position: fixed;
    top: 70px;
    right: 10px;
  }
  .back-button {
    position: fixed;
    bottom: 10px;
  }
`