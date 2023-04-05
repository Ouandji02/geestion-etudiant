import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { Student } from "../model/Student";


export class StudentMethodImplement {

  getStudent() : Student[] | [] {
    axios.get("/students").then(function (response) {
      const students: Student[] = response.data.map((student: any) =>
        new Student("", "", "", "", "", "").fromJson(student)
      );
      return students
    });
    return []
  };

  onCreateStudent = (student : Student) =>{}

  onEdit = (student : Student) => {}

  onDelete = (student : Student) => {}
  
}
