import React from 'react'
import styled from 'styled-components'
import { SelectStyle } from './StyledElements'

const Times = props => {
  const { hr, min, sec } = props.times
  return (
    <TimeStyle>
      <h2 className='time'>Time:</h2>
      <div className='time-and-title'>
        <h3>Hr</h3>
        <SelectStyle
          name='hr'
          value={hr ? hr : 0}
          onChange={e => props.handleChange(e.target)}>
          {[...Array(6)].map((el, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </SelectStyle>
      </div>
      <h3>:</h3>
      <div className='time-and-title'>
        <h3>Min</h3>
        <SelectStyle
          name='min'
          value={min ? min : 0}
          onChange={e => props.handleChange(e.target)}>
          {[...Array(59)].map((el, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </SelectStyle>
      </div>
      <h3>:</h3>
      <div className='time-and-title'>
        <h3>Sec</h3>
        <SelectStyle
          name='sec'
          value={sec ? sec : 0}
          onChange={e => props.handleChange(e.target)}>
          {[...Array(59)].map((el, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </SelectStyle>
      </div>
    </TimeStyle>
  )
}

export default Times

const TimeStyle = styled.section`
  display: flex;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  margin: 10px;
  .time {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Racing Sans One', cursive;
    margin-right: 5px;
  }
  h3 {
    text-align: center;
  }
`