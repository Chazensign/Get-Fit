import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
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

  return (
    <ExListStyle>
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
              <AppButton className='add-button' name='Add New' />
        }
        <AppButton className='back-button' name='Back' onClick={() => goBack()}/>
      </div>
    </ExListStyle>
  )
}
 
export default withRouter(ExListDisp)

const ExListStyle = styled.main`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* .header-back {
    height: 60px;
    width: 100%;
    background: black;
    position: sticky;
    top: 0;
  } */
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