import React from 'react'
import styled from 'styled-components'
import { SelectStyle } from './StyledElements'

const SetRepsWeight = (props) => {
  const {reps, sets, weight} = props.state
  return (
    <RSWStyle>
      <div className='workout-info'>
        <div className='srw-cont'>
          <h2>Sets: </h2>
          <SRWSelect
            type='number'
            name='sets'
            onChange={e => props.handleChange(e.target)}
            value={sets ? sets : 0}>
            {[...Array(11)].map((el, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </SRWSelect>
        </div>
        <div className='srw-cont'>
          <h2>Reps: </h2>
          <SRWSelect
            type='number'
            name='reps'
            onChange={e => props.handleChange(e.target)}
            value={reps ? reps : 0}>
            {[...Array(101)].map((el, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </SRWSelect>
        </div>
        <div className='srw-cont'>
          <h2>Weight: </h2>
          <SRWSelect
            type='number'
            name='weight'
            onChange={e => props.handleChange(e.target)}
            value={weight ? weight : 0}>
            {[...Array(20)].map((el, i) => (
              <option key={i} value={i * 5}>
                {i * 5}
              </option>
            ))}
          </SRWSelect>
        </div>
      </div>
    </RSWStyle>
  )
}

export default SetRepsWeight

const SRWSelect = styled(SelectStyle)`
  margin: 0 5px;
`
const RSWStyle = styled.section`
padding-left: 10px;
margin-top: 15px;
  .srw-cont {
    display: flex;
    align-items: center;
    h2 {
      font-size: 20px;
      font-weight: 400;
      font-family: 'Racing Sans One', cursive;
    }
    input {
      width: 50px;
      padding: 5px;
      margin: 10px 0 0 10px;
      border-radius: 3px;
    }
  }
`