import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { Student } from "../model/Student";

export class StudentMethodImplement {
  getStudent(): Student[] {
    var listStudents: Student[] = [];
    axios.get("/students").then(function (response) {
      const students: Student[] = response.data.map((student: any) =>
        new Student("", "", "", "", "", "").fromJson(student)
      );
      listStudents = students;
      console.log(students);
    });

    return listStudents;
  }

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
