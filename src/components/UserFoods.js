import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppButton from './AppButton'
import Meals from './Meals'
import moment from 'moment'

const UserFoods = props => {
  const [selectedMeal, setMeal] = useState(null)
  const [fromToday, setFromToday] = useState(0)
  const [pickedDate, setPickedDate] = useState(newDate())

  useEffect(() => {
    if (fromToday > 0) setPickedDate(moment().add(fromToday, 'd').format('L'))
    else if (fromToday < 0) setPickedDate(moment().subtract(fromToday, 'd').format('L'))
    else setPickedDate(moment().format('L'))
  }, [fromToday])
  // const newDate = () => {
  //   if (fromToday > 0) moment().add(fromToday, 'd').format('L')
  //   else if (fromToday < 0) moment().subtract(fromToday, 'd').format('L')
  //   else moment().format('L')
  // }

  const showMeal = meal => {
    setMeal(meal)
  }

  const filterFoods = meal => {
    return props.userFoods.filter(food => food.meal === meal)
  }

  return (
    <article>
      <div className='nutrition-button'>
        <h2>My Nutrition</h2>
        <Link to={
          pathname: '/user/addfood',
          state: {saveDate: setDate}
      }>
          <AppButton name='Add Food' />
        </Link>
      </div>
      <div>
        <img onClick={() => setFromToday(prevState => prevState - 1)} src="" alt="One day back"/>
        <h3>{pickedDate}</h3>
        <img onClick={() => setFromToday(prevState => prevState + 1)} src="" alt="One day forward"/>
      </div>
      <div className='graph-cont'>Graph</div>
      <Meals
        meal='breakfast'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Breakfast')}
        showMeal={showMeal}
      />
      <Meals
        meal='lunch'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Lunch')}
        showMeal={showMeal}
      />
      <Meals
        meal='dinner'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Dinner')}
        showMeal={showMeal}
      />
      <Meals
        meal='snacks'
        selectedMeal={selectedMeal}
        mealFoods={filterFoods('Snacks')}
        showMeal={showMeal}
      />
    </article>
  )
}

export default UserFoods
