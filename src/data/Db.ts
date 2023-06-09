import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { Student } from "../model/Student";
import { SignalWifiStatusbarConnectedNoInternet4Sharp } from "@mui/icons-material";

let students: Student[] = [
  new Student(
    "Ouandji",
    "Thierry",
    "10/04/2002",
    "19sci2148",
    "677777777",
    "informatique",
    "master1"
  ),
];

let studentsArchieve: Student[] = [
  new Student(
    "Ouandji",
    "Thierry",
    "10/04/2002",
    "19sci2148",
    "677777777",
    "informatique",
    "master1"
  ),
];

var mock = new AxiosMockAdapter(axios);

mock.onGet("/students").reply(200, {
  students: students,
  status: 200,
});

mock.onPost("/addstudents").reply((config) => {
  let { data } = config;
  const student = JSON.parse(data);
  console.log(student);
  if (students.find((s) => s.id == student.id)) {
    return [
      404,
      {
        message: "cet identifiant a ete deja attribue",
      },
    ];
  } else {
    console.log(students);
    students = [...students, student];
    return [
      200,
      {
        students: students,
        status: 200,
      },
    ];
  }
});

mock.onPost("/onedit").reply((config) => {
  let { data } = config;
  const student = JSON.parse(data);
  console.log(student);
  const index = students.findIndex((s) => s.id === student.id);
  students[index] = student;
  return [
    200,
    {
      students: students,
      status: 200,
    },
  ];
});

mock.onDelete("/ondelete").reply((config) => {
  console.log("okjhuihiyhuy",students);
  let { ids } = config.params;
  var t = [];
  students = students.filter((s) => !ids.includes(s.id));
  return [
    200,
    {
      students: students,
      status: 200,
    },
  ];
}, 200);

mock.onPost("post/studentarchieve").reply((config) => {

  let { data } = config;
  let states = JSON.parse(data);
  studentsArchieve = [...studentsArchieve,...states]
  return [
    200,
    {
      studentsArchieve: studentsArchieve,
      status: 200,
    },
  ];
}, 200);

mock.onGet("/studentarchieve").reply(200, {
  studentsArchieve: studentsArchieve,
  status: 200,
});
