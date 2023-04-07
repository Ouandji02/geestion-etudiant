import axios from "axios";
import { Student } from "../model/Student";

export class StudentMethodImplement {

  onCreateStudent = (student: Student) => {
    console.log(student);
    axios
      .post("/addstudents", student)
      .then((response) => console.log("reussi"))
      .catch((e) => console.log(e));
  };

  onEdit = (student: Student) => {
    axios
      .put("/onedit", student)
      .then((response) => console.log("reussi"))
      .catch((e) => console.log(e));
  };

  onDelete = (student: Student) => {
    axios
      .delete("ondelete")
      .then((response) => console.log("reussi"))
      .catch((e) => console.log(e));
  };
}
