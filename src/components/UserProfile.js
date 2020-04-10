import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import icons from './icons/Icons'
import UserFoods from './UserFoods'

const UserProfile = (props) => {
  const userGroup = group => {
    const location = { pathname: '/user/exList', state: { group } }
    props.history.push(location)
  }
  console.log(props.userFoods)

  icons()
  return (
    <UserPage>
      <div className='head-space' />
      <article className='ex-back'>
        <h2>My Exercises</h2>
        <nav>
          <ul>
            <div className='group-cont' onClick={() => userGroup('Chest')}>
              <img className='chest' src={window['chest']} alt='chest' />
              <li>Chest</li>
            </div>
            <div className='group-cont' onClick={() => userGroup('Back')}>
              <img className='back' src={window.back} alt='back' />
              <li>Back</li>
            </div>
            <div className='group-cont' onClick={() => userGroup('Shoulder')}>
              <img
                className='shoulders'
                src={window.shoulders}
                alt='shoulders'
              />
              <li>Shoulder</li>
            </div>
            <div className='group-cont' onClick={() => userGroup('Arms')}>
              <img className='arm' src={window.arms} alt='arms' />
              <li>Arms</li>
            </div>
            <div className='group-cont' onClick={() => userGroup('Legs')}>
              <img className='leg' src={window.legs} alt='legs' />
              <li>Legs</li>
            </div>
            <div className='group-cont' onClick={() => userGroup('Core')}>
              <img className='core' src={window.core} alt='core' />
              <li>Core</li>
            </div>
          </ul>
        </nav>
      </article>
      <UserFoods userFoods={props.userFoods} />
    </UserPage>
  )
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExs: reduxState.userExercises,
    userFoods: reduxState.userFoods
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
  
  h2 {
    font-size: 32px;
    font-family: 'Racing Sans One', cursive;
    margin: 10px 20px;
  }
  .graph-cont {
    width: 100%;
    height: 100px;
  }
`
