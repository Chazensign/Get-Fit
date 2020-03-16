import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import AppButton from './AppButton'
import styled from 'styled-components'

class ExDetails extends Component {
  constructor(props) {
    super(props)
    const {
      notes,
      modifications,
      reps,
      sets,
      hr,
      min,
      sec,
      weight
    } = this.props.location.state.exercise
    this.state = {
      toDisplay: {},
      displayEdit: true,
      userData: {
        notes,
        modifications,
        reps,
        sets,
        weight,
        hr,
        min,
        sec
      }
    }
  }
  submitChange = () => {
    axios.put(`/api/exercise/${this.state.toDisplay.id}`, this.state.userData)
    this.toggleEdit()
  }
  componentDidMount() {
    if (!this.props.location.state.exercise) {
      axios
        .get(`/api/exercise/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ toDisplay: res.data[0] })
        })
        .catch(err => console.log(err))
    }
  }
  addExToUser = () => {
    if (!this.props.userId) return alert('Please login or register.')
    axios.post('/api/user')
  }
  handleChange = trg => {
    this.setState({
      userData: { ...this.state.userData, [trg.name]: trg.value }
    })
  }
  deleteEx = () => {
    axios
      .delete(`/api/exercise/${this.state.toDisplay.id}`)
      .then(res => this.goBack())
      .catch(err => console.log(err))
  }
  goBack = () => {
    this.props.history.push(`/exlist/${this.state.toDisplay.MajorMuscle}`)
  }

  render() {
    const {
      ex_id,
      exercise,
      equipment,
      exercisetype,
      majormuscle,
      minormuscle,
      example,
      notes,
      modifications,
      reps,
      sets,
      weight,
      hr,
      min,
      sec
    } = this.props.location.state.exercise
      ? this.props.location.state.exercise
      : this.state.toDisplay

    return (
      <DetailStyle>
        <div className='header-back'></div>
        <div id={ex_id}>
          <h3 className='ex-title'>{exercise}</h3>
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
              <h2 className='notes'>Notes: </h2>
              <textarea
                name='notes'
                onChange={e => this.handleChange(e.target)}
                value={notes}
              />
            </div>
            <div className='line-cont'>
              <h2 className='modifications' >Modifications: </h2>
              <textarea
                name='modifications'
                onChange={e => this.handleChange(e.target)}
                value={modifications}
              />
            </div>
            {this.props.userId && (
              <>
                <div className='workout-info'>
                  <div className='line-cont'>
                    <h2>Reps: </h2>
                    <input
                      name='reps'
                      onChange={e => this.handleChange(e.target)}
                      value={reps}
                    />
                  </div>
                  <div className='line-cont'>
                    <h2>Sets: </h2>
                    <input
                      name='sets'
                      onChange={e => this.handleChange(e.target)}
                      value={sets}
                    />
                  </div>
                  <div className='line-cont'>
                    <h2>Weight: </h2>
                    <input
                      name='weight'
                      onChange={e => this.handleChange(e.target)}
                      value={weight}
                    />
                  </div>
                </div>
                <div className='times'>
                  <h2 className='time'>Time:</h2>
                  <div className='time-and-title'>
                    <h3>Hr</h3>
                    <select
                      name='hr'
                      value={hr}
                      onChange={e => this.handleChange(e.target)}>
                      {[...Array(10)].map((el, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <h3>:</h3>
                  <div className='time-and-title'>
                    <h3>Min</h3>
                    <select
                      name='min'
                      value={min}
                      onChange={e => this.handleChange(e.target)}>
                      {[...Array(59)].map((el, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <h3>:</h3>
                  <div className='time-and-title'>
                    <h3>Sec</h3>
                    <select
                      name='sec'
                      value={sec}
                      onChange={e => this.handleChange(e.target)}>
                      {[...Array(59)].map((el, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
              <AppButton name='Save' onClick={this.toggleEdit} />
              {this.props.saved && (
                <AppButton name='Remove' onClick={this.deleteEx} />
              )}
            </>
          )}
          <AppButton name='Go Back' onClick={this.goBack} />
        </div>
      </DetailStyle>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(ExDetails)

const DetailStyle = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #e0e0e0;
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
  }
  h2 {
    padding: 8px 0 0 8px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Racing Sans One', cursive;
  }
  .notes,
  .modifications {
    align-self: flex-start;
  }
  .workout-info {
    display: flex;
  }
  select {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.3em 0.5em;
    width: 50px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  .ex-title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    font-family: 'Racing Sans One', cursive;
    text-decoration: underline;
  }
  section {
    display: flex;
    flex-direction: column;
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
  .times {
    display: flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    margin: 10px;
    .time {
      margin-right: 10px;
    }
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
