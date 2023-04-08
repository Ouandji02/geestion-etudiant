import { createAsyncThunk } from "@reduxjs/toolkit";
import { Student } from "../model/Student";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
    "student/fetctstudents",
    async () => {
      const response = await axios.get("/students");
      return response.data;
    }
  );
  
  export const addstudents = createAsyncThunk(
    "student/addstudent",
    async (student: Student) => {
      console.log("onedit");
      const req = await axios.post("/addstudents", student);
      return req.data;
    }
  );
  
  export const editstudents = createAsyncThunk(
    "student/editstudent",
    async (student: Student) => {
      console.log("edit");
      const req = await axios.post("/onedit", student);
      return req.data;
    }
  );
  
  export const deleteStudent = createAsyncThunk(
    "student/deletetask",
    async (students: Student[]) => {
      const s = students.map((student: Student) => student.id);
      const req = await axios.delete("/ondelete", { params: { ids: s } });
      return req.data;
    }
  );
  
  export const fetchStudentsArchieve = createAsyncThunk(
    "student/fetctstudentsarchieve",
    async () => {
      const response = await axios.get("/studentarchieve");
      return response.data;
    }
  );
  
  export const addstudentsArchieve = createAsyncThunk(
    "post/addstudentarchieve",
    async (students: Student[]) => {
      const req = await axios.post("/post/studentarchieve", students);
      const s = students.map((student: Student) => student.id);
      await axios.delete("/ondelete", { params: { ids: s } });
      return req.data;
    }
  );