import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import AppButton from './ExDetails/AppButton'
import icons from './icons/Icons'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      meals: []
     }
  }
  
  userGroup = (gr) => {
    // const groupExs = this.props.userExs.filter(ex => ex.majormuscle === gr)
    const location = { pathname: '/user/exList', state: { group: gr } }
      this.props.history.push(location)
  }

  render() { 
    icons()
    return (
      <UserPage>
        <div className='head-space' />
        <article className='ex-back'>
          <h2>My Exercises</h2>
          <nav>
            <ul>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Chest')}>
                <img className='chest' src={window['chest']} alt='chest' />
                <li>Chest</li>
              </div>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Back')}>
                <img className='back' src={window.back} alt='back' />
                <li>Back</li>
              </div>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Shoulders')}>
                <img
                  className='shoulders'
                  src={window.shoulders}
                  alt='shoulders'
                />
                <li>Shoulders</li>
              </div>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Arms')}>
                <img className='arm' src={window.arms} alt='arms' />
                <li>Arms</li>
              </div>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Legs')}>
                <img className='leg' src={window.legs} alt='legs' />
                <li>Legs</li>
              </div>
              <div
                className='group-cont'
                onClick={() => this.userGroup('Core')}>
                <img className='core' src={window.core} alt='core' />
                <li>Core</li>
              </div>
            </ul>
          </nav>
        </article>
        <article>
          <div className='nutrition-button'>
            <h2>My Nutrition</h2>
            <Link to='/user/addfood'>
              <AppButton name='Add Food' />
            </Link>
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
 
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExs: reduxState.userExercises
  }
}
export default connect(mapStateToProps)(UserProfile)

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