import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NutritionLabel from './NutritionLabel'
import AppButton from './AppButton'
import Select from 'react-select'

const FoodDetails = props => {
  const { food_name } = props.location.state
  const { foodId } = props.match.params
  const [isBrand, setIsBrand] = useState(false)
  const [meal, setMeal] = useState()
  const [userValues, setUserValues] = useState(null)
  const [food, setFood] = useState({
    photo: {thumb: ''},
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
  console.log(meal)

  useEffect(() => {
      axios({
        url: `https://trackapi.nutritionix.com/v2/${
          foodId
            ? `search/item?nix_item_id=${foodId}`
            : `natural/nutrients`
        }`,
        method: food_name ? 'post' : 'get',
        headers: {
          'x-app-id': process.env.REACT_APP_NUT_ID,
          'x-app-key': process.env.REACT_APP_NUT_KEY
        },
        data: {
          'query': food_name
        }
      }).then(res => {
        console.log(res.data.foods[0])

        setFood(res.data.foods[0])
        setUserValues(res.data.foods[0])
        if (res.data.foods[0].brand_name) {
          setIsBrand(true)
        }
        console.log(res.data.foods[0])
      })
  }, [foodId, food_name])

  const adjustValues = servings => {
    setUserValues({
      ...food,
      nf_calories: food.nf_calories * servings,
      nf_total_fat: food.nf_total_fat * servings,
      nf_saturated_fat: food.nf_saturated_fat * servings,
      nf_cholesterol: food.nf_cholesterol * servings,
      nf_sodium: food.nf_sodium * servings,
      nf_total_carbohydrate: food.nf_total_carbohydrate * servings,
      nf_dietary_fiber: food.nf_dietary_fiber * servings,
      nf_sugars: food.nf_sugars * servings,
      nf_protein: food.nf_protein * servings
    })
  }

  const saveFood = () => {
    axios.post('/user/food', { ...food, meal })
  }
  return food ? (
    <FoodDetailStyle
      foodPic={
        food.photo.thumb
          ? food.photo.thumb
          : 'https://www.pikpng.com/pngl/m/5-59984_png-file-svg-vector-food-icon-png-clipart.png'
      }>
      <div className='name-img'>
        {isBrand && <h2>{food.brand_name}</h2>}
        <h2>{food.food_name}</h2>
        {food.photo.thumb && <div className='food-img' />}
      </div>
      <NutritionLabel
        food={userValues ? userValues : food}
        adjustValues={adjustValues}
      />
      <Select
        options={[
          { label: 'Breakfast', value: 'Breakfast' },
          { label: 'Lunch', value: 'Lunch' },
          { label: 'Dinner', value: 'Dinner' },
          { label: 'Snack', value: 'Snack' }
        ]}
        onChange={setMeal}
      />
      <div className='button-cont'>
        <AppButton name='Save' onClick={() => saveFood()} />
        <AppButton name='Back' />
      </div>
    </FoodDetailStyle>
  ) : (
    <FoodDetailStyle>
      <h2>Getting Food Information</h2>
    </FoodDetailStyle>
  )
}

export default FoodDetails

const FoodDetailStyle = styled.main`
  padding: 60px 30px 0;
  height: 100vh;
  background: lightgray;
  .name-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 38px;
      font-weight: bold;
    }
    .food-img {
      background-image: url(${props => `${props.foodPic}`});
      background-size: cover;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      margin: 5px;
    }
  }
  .button-cont {
    display: flex;
    justify-content: space-between;
    width: 100%
  }
`
