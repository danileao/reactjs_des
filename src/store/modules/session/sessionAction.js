import api from '../../../services/api';

import * as ActionTypes from '../../actionTypes';

export function getSession (id) {
  return dispatch => {
    dispatch({
      type:  ActionTypes.SESSION_LOAD_SESSION
    });
    const url = `public/api/${id}/sessions`;
    const request = api.get(url)

    return request.then(res => {
      dispatch({
        type: ActionTypes.SESSION_DATA_SUCCESS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.SESSION_ERROR,
        payload: err
      })
    })
  }
}
