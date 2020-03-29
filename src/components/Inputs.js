import React, { Component } from 'react';
import AppButton from './AppButton'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExs } from '../ducks/reducer'
import Select from 'react-select'
import styled from 'styled-components'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      exercise: '',
      equipment: '',
      exercisetype: '',
      majormuscle: this.props.location.state.group,
      minormuscle: '',
      example: '',
      notes: '',
      modifications: '',
      reps: '',
      sets: '',
      weight: '',
      hr: 0,
      min: 0,
      sec: 0
    }
  }

  handleChange = (trg) => {
    this.setState({ [trg.label]: trg.value })
  }
  submitEx = () => {
    if (this.props.userId) {
    axios
    .post('/api/add/exercise', this.state)
    .then(res => {
      if (this.state.checked) {
      this.props.updateExs(res.data.userExs)
      const location = {
        pathname: '/user/exlist',
        state: {group: this.state.majormuscle}
      }
      this.props.history.push(location)
      }else {
        this.props.history.push('/')
      }
    })
    }else {
      alert('Must be logged in.')
    }
  }

 render() {

  const {
    checked,
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
  } = this.state
  
   return (
     <NewExStyle className='edit-box'>
       <form>
         <label htmlFor='toUser'>Add to my exercises:</label>
         <input
           type='checkbox'
           id='toUser'
           name='toUser'
           value={true}
           onClick={() => this.setState({ checked: !checked })}
         /><br/>
         <label htmlFor='name'>Exercise Name</label>
         <input
           id='name'
           name='exercise'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={exercise}
           required={true}
         />
         <label htmlFor='equip'>Equipment</label>
         <input
           id='equip'
           name='equipment'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={equipment}
           required={true}
         />
         <label htmlFor='type'>Exercise Type</label>
         <select
           id='type'
           name='exercisetype'
           onChange={e => this.handleChange(e.target)}
           value={exercisetype}
           required={true}
         >
           <option value="Weight">Weight</option>
           <option value="Cario">Cardio</option>
         </select>
         <label htmlFor='group'>Muscle Group</label>
         <select
           id='group'
           className='musc-sel'
           name='majormuscle'
           onChange={e => this.handleChange(e.target)}
           value={majormuscle}
           required={true}>
           <option value='Chest'>Chest</option>
           <option value='Back' >Back</option>
           <option value='Shoulder' >Shoulder</option>
           <option value='Arms' >Arms</option>
           <option value='Legs' >Legs</option>
           <option value='Core'>Core</option>
         </select>
         <label htmlFor='minor'>Minor Muscle</label>
         <input
           id='minor'
           name='minormuscle'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={minormuscle || ''}
         />
         <label htmlFor='ex'>Example GIF</label>
         <input
           id='ex'
           name='example'
           type='text'
           onChange={e => this.handleChange(e.target)}
           placeholder='GIF URL'
           value={example || ''}
           required={true}
         />
         <label htmlFor='notes'>Notes</label>
         <input
           id='notes'
           name='notes'
           type='text'
           onChange={e => this.handleChange(e.target)}
           defaultValue={notes || ''}
         />
         <label htmlFor='mods'>Modifications</label>
         <input
           id='mods'
           name='modifications'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={modifications || ''}
         />
         {this.state.checked && (
           <>
             <div className='workout-info'>
               <div className='line-cont'>
                 <h2>Reps: </h2>
                 <select
                   type='number'
                   name='reps'
                   onChange={e => this.handleChange(e.target)}
                   value={reps ? reps : 0}>
                   {[...Array(101)].map((el, i) => (
                     <option key={i} value={i}>
                       {i}
                     </option>
                   ))}
                 </select>
               </div>
               <div className='line-cont'>
                 <h2>Sets: </h2>
                 <select
                   type='number'
                   name='sets'
                   onChange={e => this.handleChange(e.target)}
                   value={sets ? sets : 0}>
                   {[...Array(11)].map((el, i) => (
                     <option key={i} value={i}>
                       {i}
                     </option>
                   ))}
                 </select>
               </div>
               <div className='line-cont'>
                 <h2>Weight: </h2>
                 <select
                   type='number'
                   name='weight'
                   onChange={e => this.handleChange(e.target)}
                   value={weight ? weight : 0}>
                   {[...Array(81)].map((el, i) => (
                     <option key={i} value={i}>
                       {i}
                     </option>
                   ))}
                 </select>
               </div>
             </div>
             <div className='times'>
               <h2 className='time'>Time:</h2>
               <div className='time-and-title'>
                 <h3>Hr</h3>
                 <select
                   name='hr'
                   value={hr ? hr : 0}
                   onChange={e => this.handleChange(e.target)}>
                   {[...Array(6)].map((el, i) => (
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
                   value={min ? min : 0}
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
                   value={sec ? sec : 0}
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
       </form>
       <div className='button-cont' >
         <AppButton
           name='Submit'
           type='button'
           onClick={() => this.submitEx()}
         />
         <AppButton name='Cancel' />
       </div>
     </NewExStyle>
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
export default connect(mapStateToProps, {updateExs})(Inputs);

const NewExStyle = styled.main`
  display: flex;
  flex-direction: column;
  background: rgb(66, 66, 69);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 15px 10px 15px;
  #toUser {
    width: 18px;
    height: 18px;
    margin: 0 10px;
  }
  .musc-sel {
    width: 200px;
  }
  form {
    width: 100%;
    label {
      font-size: 22px;
      font-weight: bold;
    }
    input {
      width: 100%;
      height: 28px;
      margin: 8px 0;
      font-size: 20px;
    }
  }
  select {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.3em 0.5em;
    max-width: 100%;
    box-sizing: border-box;
    margin: 5px 0 10px 0;
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
  .workout-info {
    display: flex;
  }
  .times {
    display: flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    margin: 10px;
    select {
      width: 60px;
    }
    .time {
      margin-right: 10px;
    }
  }
  .button-cont {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`