import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
import styled from 'styled-components'
import NutritionLabel from './NutritionLabel'

const FoodDetails = props => {
  console.log(props)

  // const [isBrand, setIsBrand] = useState(false)
  const [food, setFood] = useState({
    serving_qty: 1,
    serving_unit: 'tortilla',
    serving_weight_grams: 42,
    nf_calories: 70,
    nf_total_fat: 2.5,
    nf_saturated_fat: 1,
    nf_cholesterol: 0,
    nf_sodium: 280,
    nf_total_carbohydrate: 19,
    nf_dietary_fiber: 13,
    nf_sugars: 0,
    nf_protein: 5,
    nf_potassium: 10
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

  return food ? (
    <FoodDetailStyle>
      <NutritionLabel food={food} />
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
