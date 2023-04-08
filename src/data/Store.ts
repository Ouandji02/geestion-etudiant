import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Student } from "../model/Student";
import axios from "axios";
import { nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import "./functionImpl.ts"
import { addstudents, addstudentsArchieve, deleteStudent, editstudents, fetchStudents, fetchStudentsArchieve } from "./functionImpl";



const studentSlice = createSlice({
  name: "student",
  initialState: {
    liststudents: [],
    listStudentsArchieve: [],
    status: "idle",
    error: null,
    openModalForm: false,
    openModal: false,
    openModalArchieve: false,
  },
  reducers: {
    handleModalForm: (state) => {
      state.openModalForm = true;
    },
    handleCloseModalForm: (state) => {
      state.openModalForm = false;
    },
    handleModal: (state) => {
      state.openModal = true;
    },
    handleCloseModal: (state) => {
      state.openModal = false;
    },
    handleModalArchieve: (state) => {
      state.openModalArchieve = !state.openModalArchieve;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.liststudents = action.payload.students;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        alert(action.payload);
      })
      .addCase(addstudents.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(addstudents.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.liststudents = action.payload.students;
        state.openModalForm = false;
        alert("etudiant ajoute dans la base donnees");
      })
      .addCase(addstudents.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(editstudents.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(editstudents.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.liststudents = action.payload.students;
        state.openModalForm = false;
        alert("etudiant modifie dans la base donnees");
      })
      .addCase(editstudents.rejected, (state, action) => {
        state.status = "failed";
        alert(action.error.message);
      })
      .addCase(deleteStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.id);
        state.liststudents = action.payload.students;
        state.openModal = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "failed";
        alert(action.payload);
      })
      .addCase(addstudentsArchieve.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addstudentsArchieve.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.studentsArchieve);
        state.listStudentsArchieve = action.payload.studentsArchieve;
        alert("etudiants ajoutes ");
      })
      .addCase(addstudentsArchieve.rejected, (state, action) => {
        state.status = "failed";
        alert(action.payload);
      })
      .addCase(fetchStudentsArchieve.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentsArchieve.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.id);
        state.listStudentsArchieve = action.payload.studentsArchieve;
      })
      .addCase(fetchStudentsArchieve.rejected, (state, action) => {
        state.status = "failed";
        alert(action.payload);
      });
  },
});

export const {
  handleModal,
  handleModalForm,
  handleCloseModal,
  handleCloseModalForm,
  handleModalArchieve,
} = studentSlice.actions;
export const store = configureStore({
  reducer: studentSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
