import Immutable from 'seamless-immutable'
import * as types from './actions'

export const initialState = Immutable({
  requesting: false,
  originalValue: null,
  conversionValue: null
})

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case types.REQUEST:
      return state.set('requesting', true)

    case types.REQUEST_SUCCESS:
      return state.merge({
        requesting: false,
        originalValue: Immutable(action.response.originalValue),
        conversionValue: Immutable(action.response.conversionValue),
      })

    case types.REQUEST_FAIL:
      return state.merge({
        requesting: false,
      })

    default:
      return state
  }
}
