import React from 'react'
import { Link } from "react-router-dom"
import AppButton from './ExDetails/AppButton'
import styled from 'styled-components'


function ExListDisp (props) { 
  
  let {filteredEx} = props
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
          <li className='link-list'>
            {ex.exercise}
          </li>
        </Link>
      )
    })}
    </ol>
    <AppButton className='add-button' name='Add New' />
    </ExListStyle>
   )
}
 
export default ExListDisp

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
    top: 90px;
    right: 20px;
  }
`