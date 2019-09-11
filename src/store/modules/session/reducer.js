import * as ActionTypes from '../../actionTypes';


const initialState = {
  data: [],
  loading: false,
  error: ''
};


export default function session(state = initialState, action={}) {
  switch(action.type) {
    case ActionTypes.SESSION_LOAD_SESSION:
      return {
        ...state,
        data: [],
        loading: true,
        error: ''
      }
      case ActionTypes.SESSION_DATA_SUCCESS:
        return {
        ...state,
        data: action.payload,
        loading: false,
        error: ''
      }
      case ActionTypes.SESSION_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    default:
      return state;
  }
}
