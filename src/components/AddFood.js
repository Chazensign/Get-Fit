import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AddFood = () => {
  const [brandRes, setBrandResults] = useState([])
  const [commonRes, setCommonResults] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const [brandId, setBrandId] = useState('')

  const getResults = (val, id) => {
    setSearchTerm(val)
    axios({
      // url: `https://trackapi.nutritionix.com/v2/search/instant?query=${searchTerm}&self=true&branded_region=1&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&locale=en_US&detailed=false&claims=false`,
      url: `https://trackapi.nutritionix.com/v2/search/instant?query=${searchTerm}${ id ? `&brand_ids=${id}` : '' }&self=true&branded_region=1&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&locale=en_US&detailed=false&claims=false`,
      method: 'get',
      headers: {
        'x-app-id': '6860d905',
        'x-app-key': '9c4f6f145884205e2acfc54b68231875'
      }
    })
      .then(res => {
        let brandNames = res.data.branded
          .map(brand => brand.brand_name)
        let uniBrands = brandNames.filter((b, i) => brandNames.indexOf(b) === i)
        console.log(res.data)
        setBrandResults(res.data.branded)
        setCommonResults(res.data.common)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <AddFoodPage>
      <div className='head-space' />
      <h2>Search</h2>
      <input placeholder='Brand' type='text' value={searchTerm} onChange={e => getResults(e.target.value)} />
      <div>
      {brandRes.map(brand => {
        return (
          <div className='brand-res'>
            <h3
              onClick={() => getResults(brand.brand_name, brand.nix_brand_id)}>
              {brand.brand_name}
            </h3>
            <h2>{brand.food_name}</h2>
            <img alt='brand' src={brand.photo.thumb} />
          </div>
        )})}
      </div>
    </AddFoodPage>
  )
}

export default AddFood


const AddFoodPage = styled.main`
.head-space {
  width: 100%;
  height: 60px;
}
input {
  width: 200px;
}
.brand-res {
  font-size: 20px;
  font-weight: bold;
  h3 {
    font-size: 24px;
  }
  img {
    width: 100px;
    border-radius: 8px;
    margin: 10px 40px;
  }
}
`