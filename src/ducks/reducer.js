const initialState = {
  userId: null,
  username: '',
  userExercises: [],
  userFoods: []
}

const SET_USER = 'SET_USER'
const CLEAR_USER = 'CLEAR_USER'
const UPDATE_EXS = 'UPDATE_EXS'

export function setUser(userObj) {
  return {
    type: SET_USER,
    payload: { ...userObj }
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: { ...initialState }
  }
}

export function updateExs(data) {
  console.log(data);
  
  return {
    type: UPDATE_EXS,
    payload: data
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload }
    case CLEAR_USER:
      return { ...action.payload }
      case UPDATE_EXS:
        return {...state, userExercises: action.payload}

    default:
      return state
  }
}
