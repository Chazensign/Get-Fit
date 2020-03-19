import React, { Component } from 'react';
import './Inputs.css'
import AppButton from '../ExDetails/AppButton'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExs } from '../../ducks/reducer'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      exercise: '',
      equipment: '',
      exercisetype: '',
      majormuscle: this.props.match.params.group,
      minormuscle: '',
      example: '',
      notes: '',
      modifications: '',
      reps: null,
      sets: null,
      weight: null,
      hr: 0,
      min: 0,
      sec: 0
    }
  }

  handleChange = (trg) => {
    this.setState({ [trg.name]: trg.value })
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
     <main className='edit-box'>
       {/* <h3>Add to my exercises </h3> */}
       <input
         type='checkbox'
         id='toUser'
         name='toUser'
         value={true}
         onClick={() => this.setState({ checked: !checked })}
       />
       <label htmlFor='toUser'>Add to my exercises:</label>
       <input
         required
         name='exercise'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Exercise Name'
         value={exercise}
         required={true}
       />
       <input
         name='equipment'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Necessary Equipment'
         value={equipment}
         required={true}
       />
       <input
         name='exercisetype'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Type of Exercise'
         value={exercisetype || ''}
         required={true}
       />
       <input
         required
         name='majormuscle'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Main Muscle Worked'
         value={majormuscle || ''}
         required={true}
       />
       <input
         name='minormuscle'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Secondary Muscle Worked'
         value={minormuscle || ''}
       />
       <input
         name='example'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Image/gif URL'
         value={example || ''}
         required={true}
       />
       <input
         name='notes'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Add Notes'
         defaultValue={notes || ''}
       />
       <input
         name='modifications'
         type='text'
         onChange={e => this.handleChange(e.target)}
         placeholder='Add Modifications'
         value={modifications || ''}
       />
       {this.state.checked && (
         <>
           <input
             name='reps'
             type='text'
             onChange={e => this.handleChange(e.target)}
             placeholder='Reps'
             value={reps}
           />
           <input
             name='sets'
             type='text'
             onChange={e => this.handleChange(e.target)}
             placeholder='Sets'
             value={sets || ''}
           />
           <input
             name='weight'
             type='text'
             onChange={e => this.handleChange(e.target)}
             placeholder='Weight'
             value={weight || ''}
           />
           <div className='times'>
             <h2>Time:</h2>
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
       <AppButton name='Submit' onClick={() => this.submitEx()} />
       <AppButton name='Cancel' />
     </main>
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