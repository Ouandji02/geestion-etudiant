const http = require('http')
const express = require('express');
const body_parser = require('body-parser');
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);



mock
  .onGet("/students")
  .reply(200, [
    {
      name :"Ouandji",
      surname : "Thierry",
      date :"10/04/2002",
      id :"19sci2148",
      filiary: "informatique",
      niveau :"master1"
    },
  ]);

  mock.onPost('/addstudents').reply(
    200
  )

  mock.onPut("/onedit",).reply(200)

  mock.onDelete("/ondelete").reply(200)

const port = 8080
const server = http.createServer(mock)
server.listen(process.env.PORT || port)