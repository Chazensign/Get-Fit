import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import { SelectStyle } from './StyledElements'
import { updateFoods } from '../ducks/reducer'
import { connect } from 'react-redux'
import NutritionLabel from './NutritionLabel'
import AppButton from './AppButton'
import DateSelect from './DateSelect'

const FoodDetails = props => {

  const { food_name } = props.location.state
  const { foodId } = props.match.params
  const [meal, setMeal] = useState()
  const [userValues, setUserValues] = useState(null)
  const [pickedDate, setPickedDate] = useState(moment().format('L'))
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
        setFood(res.data.foods[0])
        setUserValues(res.data.foods[0])
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

  const adjustDate = fromToday => {
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

  const saveFood = () => {
    axios
    .post('/api/user/food', { ...food, meal, date: pickedDate })
    .then(res => props.updateFoods(res.data))
    .catch(err => console.log(err))
  }
  return food ? (
    <FoodDetailStyle
      foodPic={
        food.photo.thumb
          ? food.photo.thumb
          : 'https://www.pikpng.com/pngl/m/5-59984_png-file-svg-vector-food-icon-png-clipart.png'
      }>
      <div className='name-img'>
        {food.brand_name && <h2>{food.brand_name}</h2>}
        <h2>{food.food_name}</h2>
        {food.photo.thumb && <div className='food-img' />}
      </div>
      <NutritionLabel
        food={userValues ? userValues : food}
        adjustValues={adjustValues}
      />
      <SelectStyle onChange={setMeal}>
        <option value='breakfast'>Breakfast</option>
        <option value='lunch'>Lunch</option>
        <option value='dinner'>Dinner</option>
        <option value='snack'>Snacks</option>
      </SelectStyle>
      <DateSelect adjustDate={adjustDate} pickedDate={pickedDate} />
      <div className='button-cont'>
        <AppButton name='Save' onClick={() => saveFood()} />
        <AppButton
          name='Back'
          onClick={() => props.history.push('/user/addfood')}
        />
      </div>
    </FoodDetailStyle>
  ) : (
    <FoodDetailStyle>
      <h2>Getting Food Information</h2>
    </FoodDetailStyle>
  )
}

export default connect({updateFoods})(FoodDetails)

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
