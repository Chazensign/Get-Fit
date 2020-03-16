import React, { Component } from 'react';
import './Inputs.css'
import AppButton from '../ExDetails/AppButton'
import axios from 'axios'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: '',
      equipment: '',
      exercisetype: '',
      majormuscle: '',
      minormuscle: '',
      example: '',
      notes: '',
      modifications: '',
      reps: null,
      sets: null,
      weight: null,
      hr: null,
      min: null,
      sec: null
    }
  }

  handleChange = (trg) => {
    this.setState({ [trg.name]: trg.value })
  }
  submitEx = () => {
    axios.post('/api/exercise', this.state)
  }

 render() {

  const {
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
     <form className='edit-box'>
       <h3>Add to my exercises </h3>
       <input type='checkbox' />
       <input
         required
         name='exercise'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Exercise Name'
         value={exercise || ''}
       />
       <input
         name='equipment'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Necessary Equipment'
         value={equipment || ''}
       />
       <input
         name='exercisetype'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Type of Exercise'
         value={exercisetype || ''}
       />
       <input
         required
         name='majormuscle'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Main Muscle Worked'
         value={majormuscle || ''}
       />
       <input
         name='minormuscle'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Secondary Muscle Worked'
         value={minormuscle || ''}
       />
       <input
         name='example'
         type='text'
         onChange={e => this.handleChange(e)}
         placeholder='Image/gif URL'
         value={example || ''}
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
             value={reps || ''}
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
               <select name='hr' value={hr} onChange={e => this.handleChange(e.target)}>
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
               <select name='min' value={min} onChange={e => this.handleChange(e.target)}>
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
               <select name='sec' value={sec} onChange={e => this.handleChange(e.target)}>
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
       <AppButton type='submit' name='Submit' onClick={() => this.submitEx()} />
       <AppButton name='Cancel' />
     </form>
   )
 }
}
 
export default Inputs;