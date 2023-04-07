import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Student } from "../model/Student";
import axios from "axios";
import { nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "student/fetctstudents",
  async () => {
    const response = await axios.get("/students");
    return  response.data;
  }
);

export const addstudents = createAsyncThunk(
  "student/addstudent",
  async (student: Student) => {
    console.log("onedit")
    const req = await axios.post("/addstudents", student);
     return req.data 
  }
);

export const editstudents = createAsyncThunk(
  "student/editstudent",
  async (student: Student) => {
    console.log("edit")
    const req = await axios.post("/onedit", student);
     return req.data 
  }
);

export const deleteStudent = createAsyncThunk(
  "student/deletetask",
  async (student : Student) => {
    console.log("delete")
    const req = await axios.delete("/ondelete", { params: { id: student.id } })
    return req.data
  }
)

const studentSlice = createSlice({
  name: "student",
  initialState: {
    liststudents: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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
        alert(action.payload)
      })
      .addCase(addstudents.pending, (state) => {
        state.status = "loading";
        console.log("loading")
      })
      .addCase(addstudents.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = "succeeded";
        state.liststudents =  action.payload.students;
        alert("etudiant ajoute dans la base donnees")
      })
      .addCase(addstudents.rejected, (state, action) => {
        state.status = "failed";
        alert(action.error.message)
      })
      .addCase(deleteStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.id)
        state.liststudents =  action.payload.students; 
        alert("etudiant retire de la base de donnees ")
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "failed";
        alert(action.payload)
      });
  },
});

export const { add, remove } = studentSlice.actions;

export const store = configureStore({
  reducer: studentSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
