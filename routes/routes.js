const route = require('express').Router();
const { GetTrending } = require('../services/movies.js');

route.get('/', (req, res) => {
    res.send('Hello World')
})

route.get('/trending', GetTrending);

//TODO: create a route that returns trending TV shows

module.exports = route;