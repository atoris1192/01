export const CHANGE_NAME = Symbol()
export const CHANGE_AGE = Symbol()
export const INITIAL_FORM = Symbol()
export const REQUEST_DATA = Symbol()
export const RECEIVE_DATA_SUCCESS = Symbol()
export const RECEIVE_DATA_FAILED = Symbol()

export const changeName = (name)=> ({
  type: CHANGE_NAME,
  name,
})
export const changeAge = (age)=> ({
  type: CHANGE_AGE,
  age,
})
export const initialForm = ()=> ({
  type: INITIAL_FORM,
})

export const requestData = ()=> ({
  type: REQUEST_DATA,
})

export const receiveDataSuccess = (characterArray)=> ({
  type: RECEIVE_DATA_SUCCESS,
  characterArray,
})

export const receiveDataFailed = ()=> ({
  type: RECEIVE_DATA_FAILED,
})
