export const CHANGE_NAME = Symbol()
export const CHANGE_AGE = Symbol()
export const INITIAL_FORM = Symbol()

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
