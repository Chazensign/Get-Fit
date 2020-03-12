import React from 'react'
import { Link } from "react-router-dom"
import './ExList.css'


function ExListDisp (props) { 
  let {filteredEx, userId} = props
  return ( 
    <ol>
    {filteredEx.map(ex => {
      return (
        <Link 
        key={ex.id} 
        to={{
    pathname: userId ? `/user/detview` : `/detview/${ex.ex_id}`,
    state: { exercise: ex }
  }}
    >
        {/* to={userId ? `/user/detview?ex_id=${ex.ex_id}&user_id=${userId}` : `/detview/${ex.ex_id}`}> */}
          <li className='link-list'>{ex.exercise}</li>
        </Link>
      )
    })}
    </ol>
   )
}
 
export default ExListDisp