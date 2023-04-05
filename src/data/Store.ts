import { createSlice, configureStore } from '@reduxjs/toolkit'

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students : []
  },
  reducers: {
    add: state => {
     alert()
      state.students.push()
    },
    remove: state => {
      state.students = state.students.filter(students => !students != null)
    },
    all : state => {
        state.students = []
        console.log("all")
    },

  }
})

export const { add, remove, all } = studentSlice.actions

export const store = configureStore({
  reducer: studentSlice .reducer
})
