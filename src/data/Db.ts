import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { Student } from "../model/Student";

var mock = new AxiosMockAdapter(axios);

mock
  .onGet("/students")
  .reply(200, [
    new Student(
      "Ouandji",
      "Thierry",
      "10/04/2002",
      "19sci2148",
      "informatique",
      "master1"
    ),
    new Student(
      "Ouandji",
      "Thierry",
      "10/04/2002",
      "19sci2148",
      "informatique",
      "master1"
    ),
  ]);

  mock.onPost('/addstudents').reply(
    200
  )

  mock.onPut("/onedit",).reply(200)

  mock.onDelete("/ondelete").reply(200)
