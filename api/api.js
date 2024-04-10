const express = require('express');
const apiRouter = require('./artists');
const apiRouter = express.Router();

apiRouter.use('/artists', artistsRouter);


module.exports = apiRouter;