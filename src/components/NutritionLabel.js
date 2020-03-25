import React, { useState } from 'react'
import styled from 'styled-components'

const NutritionLabel = props => {
  const { food } = props
  const [servings, setServings] = useState(1)
  const [partServing, setPartServings] = useState(0)
  return (
    <NutritionStyle>
      <h1 className='n-facts'>Nutrition Facts</h1>
      <hr className='thin-long' />
      <div className='serving grams'>
        <h3>Serving Size</h3>
        {food.serving_weight_grams && (
          <h3>
            {food.serving_qty} {food.serving_unit}&nbsp;
            {`(${food.serving_weight_grams})`}
          </h3>
        )}
      </div>
      <div className='serving size'>
        <h3>Servings:&nbsp;</h3>
        <select
          className='serv-select'
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
          className='serv-select'
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
      <hr className='thickest-long' />
      <div className='macro-line cals'>
        <div>
        <p className='amounts'>Amounts Based On Serving Number</p>
        <h3 className='cal'>Calories&nbsp;</h3>
        </div>
        <h2 className='cal-num'>
          {food.nf_calories * (+servings + +partServing)}
        </h2>
      </div>
      <hr className='thicker-long' />
      <h3 className='dv'>% Daily Value *</h3>
      <hr className='thin-long' />
      <div className='macro-line'>
        <div className='m-name-amount'>
          <h3>Total Fat&nbsp;</h3>
          <p>{food.nf_total_fat * (+servings + +partServing)}g</p>
        </div>
        <p className='percent'>
          {Math.round(
            ((food.nf_total_fat * (+servings + +partServing)) / 78) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line fats'>
        <p>
          Saturated Fat {food.nf_saturated_fat * (+servings + +partServing)}g
        </p>
        <p className='percent'>
          {Math.round(
            ((food.nf_saturated_fat * (+servings + +partServing)) / 20) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line'>
        <div className='m-name-amount'>
          <h3>Cholesterol&nbsp;</h3>
          <p>{food.nf_cholesterol * (+servings + +partServing)}mg</p>
        </div>
        <p className='percent'>
          {Math.round(
            ((food.nf_cholesterol * (+servings + +partServing)) / 300) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line'>
        <div className='m-name-amount'>
          <h3>Sodium&nbsp;</h3>
          <p>{food.nf_sodium * (+servings + +partServing)}mg</p>
        </div>

        <p className='percent'>
          {Math.round(
            ((food.nf_sodium * (+servings + +partServing)) / 2300) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line'>
        <div className='m-name-amount'>
          <h3>Total Carbohydrate&nbsp;</h3>
          <p>{food.nf_total_carbohydrate * (+servings + +partServing)}g</p>
        </div>
        <p className='percent'>
          {Math.round(
            ((food.nf_total_carbohydrate * (+servings + +partServing)) / 275) *
              100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line carbs'>
        <p>
          Dietary Fiber {food.nf_dietary_fiber * (+servings + +partServing)}g
        </p>
        <p className='percent'>
          {Math.round(
            ((food.nf_dietary_fiber * (+servings + +partServing)) / 28) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line carbs'>
        <p>Total Sugars {food.nf_sugars * (+servings + +partServing)}g</p>
      </div>
      <hr className='thin-short' />
      <div className='macro-line sugars'>
        <p>Includes {food.nf_sugars}g Added Sugars</p>
        <p className='percent'>
          {Math.round(
            ((food.nf_sugars * (+servings + +partServing)) / 50) * 100
          )}
          %
        </p>
      </div>
      <hr className='thin-long' />
      <div className='macro-line'>
        <div className='m-name-amount'>
          <h3>Protein&nbsp;</h3>
          <p>{food.nf_protein * (+servings + +partServing)}g</p>
        </div>
        {/* <p>
          {Math.round(
            ((food.nf_protein * (+servings + +partServing)) / 28) * 100
          )}
          %
        </p> */}
      </div>
      <hr className='thickest-long' />
      <hr className='thicker-long' />
      <div className='full-disclaimer'>
      <p className='ast'>*</p>
      <p className='disclaim'>
        The % Daily Value (DV) tells you how much a nutrient in a serving of
        food contributes to a daily diet. 2,000 calories a day is used for
        general nutrition advice.
      </p>
      </div>
    </NutritionStyle>
  )
}

export default NutritionLabel

const NutritionStyle = styled.main`
  max-width: 380px;
  height: 650px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
  .serv-select {
    font-size: 18px;
  }
  .n-facts {
    font-size: 42px;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: bolder;
  }
  .m-name-amount {
    display: flex;
  }
  .dv {
    align-self: flex-end;
  }
  hr {
    margin: 5px 0;
  }
  .thin-long {
    border: 0.5px solid black;
    width: 100%;
  }
  .thin-short {
    align-self: flex-end;
    border: 0.5px solid black;
    width: 95%;
  }
  .thicker-long {
    border: 3px solid black;
    width: 100%;
  }
  .thickest-long {
    border: 7px solid black;
    width: 100%;
  }
  .serving {
    display: flex;
    align-items: center;
  }
  .grams {
    justify-content: space-between;
    font-size: 22px;
    font-weight: bolder;
  }
  .dv {
    font-size: 18px;
    font-weight: bold;
  }
  .percent {
    font-weight: bold;
  }
  .macro-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    &.carbs,
    &.fats {
      padding-left: 15px;
    }
    &.sugars {
      padding-left: 30px;
    }
    &.cals {
      div {
        display: flex;
        flex-direction: column;
      }
      justify-content: space-between;
      .amounts {
        margin: 2px 0 5px 0;
        font-size: 12px;
      }
      .cal {
        font-size: 28px;
        font-weight: bold;
      }
      .cal-num {
        font-size: 44px;
        font-weight: bolder;
      }
    }
  }
  .full-disclaimer {
    display: flex;
  }
  .ast {
    width: 12px;
    padding:  7px 5px;

  }
  .disclaim {
    padding: 5px 0 0 5px;
    font-size: 14px;
  }
`
