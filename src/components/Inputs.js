import React, { Component } from 'react';
import AppButton from './AppButton'
import SetRepsWeight from './SetRepsWeight'
import Times from './Times'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExs } from '../ducks/reducer'
import styled from 'styled-components'
import { SelectStyle, MultiButton } from './StyledElements'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      exercise: '',
      equipment: '',
      exercisetype: 'weight',
      majormuscle: this.props.location.state.group,
      minormuscle: '',
      example: '',
      notes: '',
      modifications: '',
      reps: 0,
      sets: 0,
      weight: 0,
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
     <NewExStyle className='edit-box'>
       <form>
         <label htmlFor='name'>Exercise Name</label>
         <input
           id='name'
           name='exercise'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={exercise}
           required
         />
         <label htmlFor='equip'>Equipment</label>
         <input
           id='equip'
           name='equipment'
           type='text'
           onChange={e => this.handleChange(e.target)}
           value={equipment}
           required
         />
         <label htmlFor='type'>Exercise Type</label>
         <SelectStyle
           id='type'
           name='exercisetype'
           onChange={e => this.handleChange(e.target)}
           value={exercisetype}
           required>
           <option value='Weight'>Weight</option>
           <option value='Cario'>Cardio</option>
         </SelectStyle>
         <label htmlFor='group'>Muscle Group</label>
         <SelectStyle
           id='group'
           name='majormuscle'
           onChange={e => this.handleChange(e.target)}
           value={majormuscle}
           required>
           <option value='Chest'>Chest</option>
           <option value='Back'>Back</option>
           <option value='Shoulder'>Shoulder</option>
           <option value='Arms'>Arms</option>
           <option value='Legs'>Legs</option>
           <option value='Core'>Core</option>
         </SelectStyle>
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
           required
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
         <label htmlFor='toUser'>Add to my exercises:</label>
         <input
           type='checkbox'
           id='toUser'
           name='toUser'
           onClick={() => this.setState({ checked: !checked })}
         />
         {this.state.checked && (
           <>
             <SetRepsWeight handleChange={this.handleChange} state={{sets, reps, weight}} />
             <Times handleChange={this.handleChange} times={(hr, min, sec)} />
           </>
         )}
       </form>
       <ButtonLayout>
         <AppButton
           name='Submit'
           type='button'
           onClick={this.submitEx}
         />
         <AppButton name='Cancel' onClick={() => this.props.history.push('/exercises', {group: this.props.location.state.group})} />
       </ButtonLayout>
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

const ButtonLayout = styled(MultiButton)`
  position: fixed;
  bottom: 10px;
`

const NewExStyle = styled.main`
  display: flex;
  flex-direction: column;
  background: lightgray;
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
  #type, #group {
    width: 200px;
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
  /* .button-cont {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  } */
`