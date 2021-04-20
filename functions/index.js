const functions = require("firebase-functions")
const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  res.send('It is working!')
})
app.get('/test2', (req, res) => {
  res.send('It is working AGAIN!')
})

exports.app = functions.https.onRequest(app)
