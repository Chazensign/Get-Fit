import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FoodDetails = props => {
  console.log(props)

  const [isBrand, setIsBrand] = useState(false)
  const [food, setFood] = useState()
  const [servings, setServings] = useState(1)
  const [partServing, setPartServings] = useState(0)

  useEffect(() => {
    axios({
      url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${props.match.params.foodId}`,
      method: 'get',
      headers: {
        'x-app-id': process.env.REACT_APP_NUT_ID,
        'x-app-key': process.env.REACT_APP_NUT_KEY
      }
    }).then(res => {
      setFood(res.data.foods[0])
      if (res.data.foods[0].brand_name) {
        setIsBrand(true)
      }
      console.log(res.data.foods[0])
    })
  })
  if (food) {
    return (
      <NutritionStyle>
        <h1>Nutrition Facts</h1>
        <h2>{food.food_name}</h2>
        <div className='serving'>
          <h3>Serving Size: {food.serving_unit} Servings: </h3>
          <select
            name='servings'
            value={servings || 0}
            onChange={e => setServings(e.target.value)}>
            {[...Array(10)].map((el, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <select
            name='partServing'
            value={partServing || 0}
            onChange={e => setPartServings(e.target.value)}>
            <option value={0}>0</option>
            <option value={0.125}>1/8</option>
            <option value={0.25}>1/4</option>
            <option value={0.325}>3/8</option>
            <option value={0.5}>1/2</option>
            <option value={0.625}>5/8</option>
            <option value={0.75}>3/4</option>
            <option value={0.825}>7/8</option>
          </select>
        </div>
        <h4>Calories:</h4>
      </NutritionStyle>
    )
  } else {
    return (
      <NutritionStyle>
        <h2>Getting Food Information</h2>
      </NutritionStyle>
    )
  }
}

export default FoodDetails

const NutritionStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgray;
  height: 100vh;
  padding: 60px 10px 0 10px;
`
