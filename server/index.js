"use strict";

const path = require("path");
const fs = require('fs');
const express = require('express');
const app = express();

const INDEX_HTML = fs.readFileSync(
  path.join(__dirname, '..', 'client', 'build', 'index.html'),
  { encoding: 'utf8' }
).replace(
  '/static/app.js',
  'http://127.0.0.1:2999/static/app.js'
);

app.get('/', (req, res) => {
  res.status(200).set('Content-Type', 'text/html').send(INDEX_HTML);
});

app.listen(3000, () => {
  console.log('All good on 3000');
});