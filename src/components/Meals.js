import React, { useState } from 'react'
import styled from 'styled-components'

const Meals = (props) => {
  const { meal, selectedMeal, mealFoods, showMeal } = props
  const [ selectedFood, setSelectedFood ] = useState(null)
  
const addMacros = (macro) => {
  return mealFoods.reduce((acc, food) => {
    return acc + food[macro]
  }, 0)
}

  return (
    <StyledMeal open={selectedMeal === meal} onClick={() => showMeal(meal)}>
      <summary>
        <h3>{meal}</h3>
        <h4>Cal: {addMacros('cals')}</h4>
        <img
          alt='expand'
          src={selectedMeal === meal ? './up-arrow.png' : './down-arrow.png'}
        />
      </summary>
      <div>
        <h4>Fat: {addMacros('fat')}</h4>
        <h4>Carbs: {addMacros('carbs')}</h4>
        <h4>Protein: {addMacros('protein')}</h4>
      </div>
      <ul>
        {mealFoods.map(food => {
          return (
            <li
              key={food.food_id}
              onClick={() => setSelectedFood(food.food_id)}>
              <details
                open={selectedMeal === meal && selectedFood === food.food_id}>
                <summary>
                  <h3>{food.brand_name}</h3>
                  <h4>Cal: {food.cals}</h4>
                </summary>
                <div className='nutri-line'>
                  <h5>Fat:</h5>
                  <h5>{food.fat}g</h5>
                </div>
                <div className='nutri-line'>
                  <h5>Carbs:</h5>
                  <h5>{food.carbs}g</h5>
                </div>
                <div className='nutri-line'>
                  <h5>Protein:</h5>
                  <h5>{food.protein}g</h5>
                </div>
              </details>
            </li>
          )
        })}
      </ul>
    </StyledMeal>
  )
}
 
export default Meals

const StyledMeal = styled.details`
  margin: 10px 10px;
  details {
    margin: 10px 10px;
  }
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    ::-webkit-details-marker {
      display: none;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      width: 100px;
    }
    img {
      height: 28px;
    }
  }
`