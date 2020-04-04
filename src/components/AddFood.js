import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import BarcodeReader from 'react-barcode-reader'
import AppButton from './AppButton'
import { Link } from 'react-router-dom'

const AddFood = () => {
  const [brandRes, setBrandResults] = useState([])
  const [commonRes, setCommonResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [brandId, setBrandId] = useState('')
  const [showScan, setScan] = useState(false)
  const [waiting, setWaiting] = useState(false)

  const getResults = (searchVal) => {
    console.log(waiting)
    
    setSearchTerm(searchVal)
    if (waiting) {
      return null
    }
    setWaiting(true)
    axios({
      url: `https://trackapi.nutritionix.com/v2/search/instant?query=${searchVal}${
        brandId ? `&brand_ids=${brandId}` : ''
      }&self=true&branded_region=1&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&locale=en_US&detailed=false&claims=false`,
      method: 'get',
      headers: {
        'x-app-id': process.env.REACT_APP_NUT_ID,
        'x-app-key': process.env.REACT_APP_NUT_KEY
      }
    })
      .then(res => {
        console.log(res.data)
        setWaiting(false)
        if (brandId) {
          setCommonResults(res.data.branded)
        } else {
          const uniqueBrands = res.data.branded
            .map(e => e.brand_name)
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => res.data.branded[e])
            .map(e => res.data.branded[e])
          setBrandResults(uniqueBrands)
          setCommonResults(res.data.common)
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <AddFoodPage>
      <div className='search-cont'>
      <h2>Search</h2>
      <input
        placeholder='Brand or Food'
        type='text'
        value={searchTerm}
        onChange={e => getResults(e.target.value)}
      />
      <AppButton
        name='Clear'
        onClick={() => {
          setSearchTerm('')
          setBrandId('')
          setCommonResults([])
          setBrandResults([])
        }}
      />
      </div>
      <div className='all-results'>
        <h2>Brands</h2>
        {brandRes.map((brand, i) => {
          return (
            <div className='brand-res' key={i}>
              <h3
                onClick={() => {
                  setBrandId(brand.nix_brand_id)
                  setBrandResults([brand])
                  setCommonResults([])
                  setSearchTerm('')
                }}>
                {brand.brand_name}
              </h3>
            </div>
          )
        })}
        <h2>Foods</h2>
        {commonRes.map((food, i)=> {
          return (
            <Link
            key={i}
              to={`/food/details/${food.nix_item_id}`}
              className='brand-res'>
              <h4>{food.food_name}</h4>
              <img alt='brand' src={food.photo.thumb} />
            </Link>
          )
        })}
      </div>
      {showScan && (
        // navigator.mediaDevices.getUserMedia({ video: true })
        <BarcodeReader
          onError={err => console.log(err)}
          onScan={res => console.log(res)}
        />
      )}
      <AppButton name='Scan' onClick={() => setScan(true)} />
    </AddFoodPage>
  )
}

export default AddFood


const AddFoodPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgray;
  height: 100vh;
  padding: 20px;
h2 {
  font-size: 24px;
}
  input {
    width: 70%;
    border-radius: 2px;
  }
  .all-results {
    background: white;
    height: 500px;
    border-radius: 2px;
    overflow: scroll;
    h2 {
      position: sticky;
      top: 0;
      padding: 5px 20px;
      background: #f0f0f0;
      font-size: 28px;
      font-weight: bold;
      border-radius: 2px;
      box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.36);
    }
  }
  .brand-res {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    h3 {
      font-size: 20px;
      margin: 10px 40px;
    }
    img {
      width: 50px;
      border-radius: 8px;
      margin: 10px 40px;
    }
  }
`