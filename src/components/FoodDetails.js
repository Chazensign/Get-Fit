import React, { useLayoutEffect, useEffect, useRef } from 'react'
import axios from 'axios'
import $ from 'jquery'
import 'nutrition-label-jquery-plugin/dist/js/nutritionLabel-min.js'
import 'nutrition-label-jquery-plugin/dist/css/nutritionLabel-min.css'


const FoodDetails = (props) => {
  console.log(props)

  const label = useRef()

   useLayoutEffect(() => {
     const $label = $(label.current)
    const handleChange = (e) => {
      props.onChange(e.target.value)
    }
    $(label).nutritionLabel({
     showServingUnitQuantity: false,
     itemName: 'Bleu Cheese Dressing',
     ingredientList: 'Bleu Cheese Dressing',
     showPolyFat: false,
     showMonoFat: false,
     valueCalories: 450,
     valueFatCalories: 430,
     valueTotalFat: 48,
     valueSatFat: 6,
     valueTransFat: 0,
     valueCholesterol: 30,
     valueSodium: 780,
     valueTotalCarb: 3,
     valueFibers: 0,
     valueSugars: 3,
     valueProteins: 3,
     valueVitaminD: 12.22,
     valuePotassium_2018: 4.22,
     valueCalcium: 7.22,
     valueIron: 11.22,
     valueCaffeine: 15.63,
     showLegacyVersion: false
   })
    $label.on('change',handleChange)
    $label.trigger("chosen:updated")
    $label.trigger("chosen:updated")
    
    return () => {
      $label.off('change', handleChange);
      $label.nutritionLabel('destroy');
      console.log("unmounted")
    }
  }, [props])
  
  useEffect(() => {
    axios({
      url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${props.match.params.foodId}`,
      method: 'get',
      headers: {
        'x-app-id': process.env.REACT_APP_NUT_ID,
        'x-app-key': process.env.REACT_APP_NUT_KEY
      }
    })
    .then(res => {
      console.log(res.data.foods[0])
      
    })
  })
  return ( 
    <main>
      <div ref={label}>
        {/* {$('#label').nutritionLabel({
     showServingUnitQuantity: false,
     itemName: 'Bleu Cheese Dressing',
     ingredientList: 'Bleu Cheese Dressing',
     showPolyFat: false,
     showMonoFat: false,
     valueCalories: 450,
     valueFatCalories: 430,
     valueTotalFat: 48,
     valueSatFat: 6,
     valueTransFat: 0,
     valueCholesterol: 30,
     valueSodium: 780,
     valueTotalCarb: 3,
     valueFibers: 0,
     valueSugars: 3,
     valueProteins: 3,
     valueVitaminD: 12.22,
     valuePotassium_2018: 4.22,
     valueCalcium: 7.22,
     valueIron: 11.22,
     valueCaffeine: 15.63,
     showLegacyVersion: false
   })} */}
      </div>
      
    </main>
   )
}
 
export default FoodDetails