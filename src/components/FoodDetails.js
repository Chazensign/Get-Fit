import React, { useState, useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NutritionLabel from './NutritionLabel'
import AppButton from './AppButton'
import Select from 'react-select'

const FoodDetails = props => {
  console.log(props)

  const [isBrand, setIsBrand] = useState(false)
  const [meal, setMeal] = useState()
  const [food, setFood] = useState({
    brand_name: '',
    serving_unit: '',
    serving_qty: 1,
    serving_weight_grams: 0,
    nf_calories: 0,
    nf_total_fat: 0,
    nf_saturated_fat: 0,
    nf_cholesterol: 0,
    nf_sodium: 0,
    nf_total_carbohydrate: 0,
    nf_dietary_fiber: 0,
    nf_sugars: 0,
    nf_protein: 0
  })

  // useEffect(() => {
  //   axios({
  //     url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${props.match.params.foodId}`,
  //     method: 'get',
  //     headers: {
  //       'x-app-id': process.env.REACT_APP_NUT_ID,
  //       'x-app-key': process.env.REACT_APP_NUT_KEY
  //     }
  //   }).then(res => {
  //     setFood(res.data.foods[0])
  //     if (res.data.foods[0].brand_name) {
  //       setIsBrand(true)
  //     }
  //     console.log(res.data.foods[0])
  //   })
  // }, [props.match.params.foodId])

  const adjustValues = (servings) => {
    setFood({
      ...food,
      nf_calories: food.nf_calories * servings,
      nf_total_fat: food.nf_total_fat * servings,
      nf_saturated_fat: food.nf_saturated_fat * servings,
      nf_cholesterol: food.nf_colesterol * servings,
      nf_sodium: food.nf_sodium * servings,
      nf_total_carbohydrate: food.nf_total_carbohydrate * servings,
      nf_dietary_fiber: food.nf_dietary_fiber * servings,
      nf_sugars: food.nf_sugars * servings,
      nf_protein: food.nf_protein * servings
    })
  }

  const saveFood = () => {
    axios.post('/user/food', {...food, meal})
  }

  return food ? (
    <FoodDetailStyle>
      {isBrand && <h2>{food.brand_name}</h2>}<h3>{food.food_name}</h3>
      <NutritionLabel food={food} adjustValues={adjustValues}/>
      <Select 
      options={[{label: 'Breakfast', value: 'Breakfast'}, {label: 'Lunch', value: 'Lunch'}, { label: 'Dinner', value: 'Dinner'}, {label: 'Snack', value: 'Snack'}]}
      onChange={e => setMeal(e.target.value)}
      />
      <AppButton name='Save' onClick={() => saveFood()}/>
      <AppButton name='Back' />
    </FoodDetailStyle>
  ) : (
    <FoodDetailStyle>
      <h2>Getting Food Information</h2>
    </FoodDetailStyle>
  )
}

export default FoodDetails

const FoodDetailStyle = styled.main`
padding: 90px 30px 0;
height: 100vh;
background: lightgray;
`
