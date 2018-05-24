// ------------------------------------
// Constants
// ------------------------------------
export const GET_DEVICE_INFO = 'GET_DEVICE_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export function getDeviceInfo (isMobile = false) {
  return {
    type    : GET_DEVICE_INFO,
    payload : isMobile
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isMobile: false
}
export default function locationReducer (state = initialState, action) {
  return action.type === GET_DEVICE_INFO
    ? action.payload
    : state
}
