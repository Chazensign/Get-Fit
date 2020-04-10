import React, { useState } from 'react'
import styled from 'styled-components'

const DateSelect = (props) => {
  const { pickedDate, adjustDate } = props
  const [ fromToday, setFromToday ] = useState(0)

  const moveDate = (diff) => {

    adjustDate(diff)
    setFromToday(diff)
  }

  return (
    <DatePickStyle>
      <img
        className='arrow'
        onClick={() => moveDate(fromToday - 1)}
        src='./left-arrow.png'
        alt='One day back'
      />
      <h3>{pickedDate}</h3>
      <img
        className='arrow'
        onClick={() => moveDate(fromToday + 1)}
        src='./right-arrow.png'
        alt='One day forward'
      />
    </DatePickStyle>
  )
}
 
export default DateSelect;

const DatePickStyle = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .arrow {
    height: 30px;
  }
  h3 {
    font-size: 28px;
    font-weight: bold;
    color: #525252;
  }
`