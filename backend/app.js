const express = require('express');
const body_parser = require('body-parser');
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

const app = express()


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
      "19sci2147",
      "informatique",
      "master1"
    ),
  ])

  mock.onPost('/addstudents').reply(
    200
  )

  mock.onPut("/onedit",).reply(200)

  mock.onDelete("/ondelete").reply(200)