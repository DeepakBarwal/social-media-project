const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
  res.send('TODO: show all post');
});

module.exports = {
  postsRoute: route,
};
