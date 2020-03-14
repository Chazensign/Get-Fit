import React from 'react';
import './Inputs.css'
import AppButton from '../ExDetails/AppButton'

const Inputs = (props) => {

  let {
    notes,
    modifications,
    reps,
    sets,
    weight,
    time
  } = props.userData
  return (
    <form className='edit-box'>
      {/* <input
          required
          name="exercise"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Exercise Name"
          value={exercise || ""}
        />
        <input
          name="equipment"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Necessary Equipment"
          value={equipment || ""}
        />
        <input
          name="exercisetype"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Type of Exercise"
          value={exercisetype || ""}
        />
        <input
          required
          name="majormuscle"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Main Muscle Worked"
          value={majormuscle || ""}
        />
        <input
          name="minormuscle"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Secondary Muscle Worked"
          value={minormuscle || ""}
        />
        <input
          name="example"
          type="text"
          onChange={e => props.handleChange(e)}
          placeholder="Image/gif URL"
          value={example || ""}
        /> */}
      <input
        name='notes'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Add Notes'
        defaultValue={notes || ''}
      />
      <input
        name='modifications'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Add Modifications'
        value={modifications || ''}
      />
      <input
        name='reps'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Reps'
        value={reps || ''}
      />
      <input
        name='sets'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Sets'
        value={sets || ''}
      />
      <input
        name='weight'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Weight'
        value={weight || ''}
      />
      <input
        name='time'
        type='text'
        onChange={e => props.handleChange(e.target)}
        placeholder='Time'
        value={time || ''}
      />
      <AppButton type='submit' name='Submit' onClick={props.submitChange} />
      <AppButton name='Cancel' onClick={props.toggleEdit} />
    </form>
  )
}
 
export default Inputs;