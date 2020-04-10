import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'
import AppButton from './AppButton'
import DateSelect from './DateSelect'
import Meals from './Meals'

const UserFoods = props => {
  const [selectedMeal, setMeal] = useState(null)
  const [pickedDate, setPickedDate] = useState(moment().format('L'))

  const showMeal = meal => {
    setMeal(meal)
  }

  const filterFoods = meal => {
    console.log(pickedDate, props.userFoods[0].consumed_date);
    
    return props.userFoods.filter(food => food.meal === meal && pickedDate === moment(food.consumed_date).format('L'))
  }

  const adjustDate = (fromToday) => {
    if (fromToday > 0)
      setPickedDate(
        moment()
          .add(fromToday, 'd')
          .format('L')
      )
    else if (fromToday < 0)
      setPickedDate(
        moment()
          .subtract(-1 * fromToday, 'd')
          .format('L')
      )
    else setPickedDate(moment().format('L'))
  }

  return (
    <UserFoodStyle>
      <div className='nutrition-button'>
        <h2>My Nutrition</h2>
        <Link to='/user/addfood'>
          <AppButton name='Add Food' />
        </Link>
      </div>
      <DateSelect adjustDate={adjustDate} pickedDate={pickedDate} />
      <div className='graph-cont'>Graph</div>
      <Meals
        meal='Breakfast'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Breakfast')}
        showMeal={showMeal}
      />
      <Meals
        meal='Lunch'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Lunch')}
        showMeal={showMeal}
      />
      <Meals
        meal='Dinner'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Dinner')}
        showMeal={showMeal}
      />
      <Meals
        meal='Snacks'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Snacks')}
        showMeal={showMeal}
      />
    </UserFoodStyle>
  )
}

export default UserFoods

const UserFoodStyle = styled.article`
  .nutrition-button {
    display: flex;
  }
  h2 {
    font-size: 32px;
    font-family: 'Racing Sans One', cursive;
    margin: 10px 20px;
  }
`
