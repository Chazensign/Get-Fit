import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExs } from '../ducks/reducer'
import AppButton from './AppButton'
import styled from 'styled-components'
import icons from './icons/Icons'
import { Redirect } from 'react-router-dom'
import SetRepsWeight from './SetRepsWeight'
import Times from './Times'

class ExDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDisplay: {},
      group: '',
      userData: {}
    }
    
  }

  componentDidMount() {
    const { state } = this.props.location
    if (state === undefined) {
      return <Redirect to='/' />
    }
      this.setState({
        userData: state.exercise,
        group: state.group
      })
  }

  addExToUser = () => {
    const { props, state } = this
    if (!props.userId) return alert('Please login or register.')
    let index = props.userExercises.filter(
      ex => ex.ex_id === state.userData.ex_id
    )
    if (index[0]) return this.submitChange()
    axios
      .post('/api/user/exercises', state.userData)
      .then(res => {
        props.updateExs(res.data)
        props.history.push('/profile')
      })
  }

  handleChange = trg => {
    this.setState({
      userData: { ...this.state.userData, [trg.name]: trg.value }
    })
  }

  submitChange = () => {
    axios
      .put('/api/user/exercise', {
        ...this.state.userData,
        userId: this.props.userId
      })
      .then(res => {
        this.props.updateExs(res.data)
      })
  }

  deleteEx = () => {
    const { user_ex_id } = this.props.location.state
    axios
      .delete(`/api/user/exercise/${user_ex_id}`)
      .then(res => this.goBack())
      .catch(err => console.log(err))
  }

  goBack = mM => {
    let location
    if (this.props.location.state.user_ex_id) {
      location = {
        pathname: '/user/exList',
        state: { group: mM }
      }
    } else {
      location = {
        pathname: '/exercises',
        state: { group: mM }
      }
    }
    this.props.history.push(location)
  }

  render() {
    if (this.props.location.state === undefined) {
      return (<Redirect to='/'/>)
    }
    const {
      exercise,
      equipment,
      exercisetype,
      majormuscle,
      minormuscle,
      example
    } = this.props.location.state.exercise
    const {
      notes,
      modifications,
      reps,
      sets,
      weight,
      hr,
      min,
      sec
    } = this.state.userData
    icons()
    return (
      <DetailStyle>
        <div>
          <div className='title-icon'>
            <h1>{exercise}</h1>
            <img
              className='group-png'
              src={window[majormuscle.toLowerCase()]}
              alt=''
            />
          </div>
          <dl>
            <div className='line-cont'>
              <h2>Equipment:</h2> <span>{equipment}</span>
            </div>
            <div className='line-cont'>
              <h2>Exersize Type:</h2> <span>{exercisetype}</span>
            </div>
            <div className='line-cont'>
              <h2>Major Muscle:</h2> <span>{majormuscle}</span>
            </div>
            {minormuscle && (
              <div className='line-cont'>
                <h2>Minor Muscle:</h2> <span>{minormuscle}</span>
              </div>
            )}
            <div className='line-cont'>
              <h2 className='modifications'>Modifications: </h2>
              <textarea
                name='modifications'
                onChange={e => this.handleChange(e.target)}
                value={modifications ? modifications : ''}
              />
            </div>
            <div className='line-cont'>
              <h2 className='notes'>Notes: </h2>
              <textarea
                name='notes'
                onChange={e => this.handleChange(e.target)}
                value={notes ? notes : ''}
              />
            </div>
            {this.props.userId && (
              <>
                <SetRepsWeight
                  handleChange={this.handleChange}
                  state={{ sets, reps, weight }}
                />
                <Times handleChange={this.handleChange} times={{ hr, min, sec }}/>
              </>
            )}
          </dl>
        </div>
        <details>
          <summary>Example</summary>
          <img src={example} alt='Exercise example' />
        </details>
        <div className='button-cont'>
          {this.props.userId && (
            <>
              <AppButton name='Save' onClick={this.addExToUser} />
              {this.props.saved && (
                <AppButton name='Remove' onClick={this.deleteEx} />
              )}
            </>
          )}
          <AppButton name='Back' onClick={() => this.goBack(majormuscle)} />
        </div>
      </DetailStyle>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username,
    userExercises: reduxState.userExercises
  }
}
export default connect(mapStateToProps, { updateExs })(ExDetails)

const DetailStyle = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #e0e0e0;
  .title-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 32px;
      font-family: 'Racing Sans One', cursive;
      margin: 10px 10px;
    }
    .group-png {
      height: 40px;
    }
  }
  .line-cont {
    display: flex;
    align-items: center;
    textarea {
      font-family: 'Nunito', sans-serif;
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: rgb(66, 66, 69);
      width: 100%;
      height: 80px;
      margin: 8px 10px 0 5px;
      border-radius: 3px;
    }
    input {
      width: 50px;
      padding: 5px;
      margin: 10px 0 0 10px;
      border-radius: 3px;
    }
    h2 {
      padding: 8px 0 0 8px;
      margin-left: 10px;
      font-size: 20px;
      font-weight: 400;
      font-family: 'Racing Sans One', cursive;
    }
  }
  .notes,
  .modifications {
    align-self: flex-start;
  }
  .workout-info {
    display: flex;
  }
  .ex-title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    font-family: 'Racing Sans One', cursive;
    text-decoration: underline;
  }
  span {
    padding: 14px 0 0 10px;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    color: rgb(66, 66, 69);
  }
  .button-cont {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  details {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 200px;
      width: auto;
      overflow: hidden;
    }
  }
`
