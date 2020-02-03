const express = require('express');
const artistControllers = require('./controllers/artist');
const albumControllers = require('./controllers/album');
const songControllers = require('./controllers/song');

const app = express();
app.use(express.json());

app.post('artists/', artistControllers.create);
app.post('albums/', albumControllers.create);
app.post('songs/', songControllers.create);

module.exports = app;
