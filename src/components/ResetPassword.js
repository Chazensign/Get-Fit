import React from 'react'
import AppButton from './AppButton'
import axios from 'axios'

const ResetPassword = (props) => {

  const [email, setEmail] = useState('')

  axios.post('/api/user/password', {email})

  return ( 
  <PasswordModal >
    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
    <AppButton name='Submit'/>
  </PasswordModal> 
  )
}
 
export default ResetPassword;