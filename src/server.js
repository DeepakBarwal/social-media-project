const express = require('express');

const { db } = require('./db/models');

const app = express();

db.sync({ force: true })
  .then(() => {
    app.listen(3333, () => {
      console.log('http://localhost:3333');
    });
  })
  .catch((err) => {
    console.error(new Error('Could not start db'));
    console.error(err);
  });
