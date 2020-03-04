import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppButton from './ExDetails/AppButton'
import chest from './icons/chest.png'
import back from './icons/back.png'
import shoulders from './icons/shoulders.png'
import arm from './icons/arm.png'
import leg from './icons/leg.png'
import core from './icons/core.png'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      meals: []
     }
  }
  render() { 
    return (
      <UserPage>
        <div className='head-space' />
        <article className='ex-back'>
          <h2>My Exercises</h2>
          <nav>
            <ul>
              <Link to='/user/exercises/chest'>
                <div className='group-cont'>
                  <img className='chest' src={chest} alt='chest' />
                  <li>Chest</li>
                </div>
              </Link>
              <Link to='/user/exercises/back'>
                <div className='group-cont'>
                  <img className='back' src={back} alt='back' />
                  <li>Back</li>
                </div>
              </Link>
              <Link to='/user/exercises/shoulders'>
                <div className='group-cont'>
                  <img className='shoulders' src={shoulders} alt='shoulders' />
                  <li>Shoulders</li>
                </div>
              </Link>
              <Link to='/user/exercises/arms'>
                <div className='group-cont'>
                  <img className='arm' src={arm} alt='arm' />
                  <li>Arms</li>
                </div>
              </Link>
              <Link to='/user/exercises/legs'>
                <div className='group-cont'>
                  <img className='leg' src={leg} alt='leg' />
                  <li>Legs</li>
                </div>
              </Link>
              <Link to='/user/exercises/core'>
                <div className='group-cont'>
                  <img className='core' src={core} alt='core' />
                  <li>Core</li>
                </div>
              </Link>
            </ul>
          </nav>
        </article>
        <article>
          <div className='nutrition-button'>
            <h2>My Nutrition</h2>
            <AppButton name='Add Food' />
          </div>
          <div className='graph-cont'>Graph</div>
          <details>
            <summary>
              <h3>Breakfast</h3>
              <h4>Cal:</h4>
            </summary>
          </details>
          <details>
            <summary>
              <h3>Lunch</h3>
              <h4>Cal:</h4>
            </summary>
          </details>
          <details>
            <summary>
              <h3>Dinner</h3>
              <h4>Cal:</h4>
            </summary>
          </details>
          <details>
            <summary>
              <h3>Snack</h3>
              <h4>Cal:</h4>
            </summary>
          </details>
          <ul>
            {this.state.meals.map(meal => {
              return <li>meal</li>
            })}
          </ul>
        </article>
      </UserPage>
    )
  }
}
 
export default UserProfile

const UserPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head-space {
    width: 100vw;
    height: 60px;
  }
  .ex-back {
    background: #ebebeb;
  }
  .group-cont {
    display: flex;
    margin: 0 40px;
    img {
      width: 40px;
    }
  }
  li {
    margin: 10px 30px;
    font-size: 24px;
  }
  .nutrition-button {
    display: flex;
  }
  h2 {
    font-size: 32px;
    font-family: 'Racing Sans One', cursive;
    margin: 10px 20px;
  }
  .graph-cont {
    width: 100%;
    height: 100px;
  }
  details {
    margin: 10px 40px;
  }
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    ::-webkit-details-marker {
      display: none;
    }
    h3 {
      font-size: 24px;
    }
        h4 {
          width: 100px;
        }
  }
`