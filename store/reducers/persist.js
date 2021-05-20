//set values from the exterior
const _state = {}

//types creators
const SET_PERSIST = 'SET_LAST';

//reducer
export default function reducer(state=_state, action) {

  function updateState(newState) {
    return {
      ...state,
      ...newState
    }
  }

  switch(action.type) {
    case SET_PERSIST:
      return updateState({
        [action.key]: action.value
      })

    default:
      return state;
  }
}

//action creators
export const persist = (key, value)=> (dispath, getState)=> {
  dispath({
    type: SET_PERSIST,
    key: key,
    value: value
  })  
} 