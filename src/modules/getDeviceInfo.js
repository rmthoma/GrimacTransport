// ------------------------------------
// Constants
// ------------------------------------
export const GET_DEVICE_INFO = 'GET_DEVICE_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export function checkIsMobile () {
  let mobile = ""

  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent))
    mobile = true
  else
    mobile = false

  return {
    type    : GET_DEVICE_INFO,
    payload : mobile
  }
}

export const actions = {
  checkIsMobile
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_DEVICE_INFO]    : (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function getDeviceInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
