// reducers are function
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // always return new instances of state, do not overwrite
    // return state.concat([ action.payload.data ]);
      // es6 way:
      return [ action.payload.data, ...state ];
  }

  return state;
}
