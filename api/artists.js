const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || '../database.sqlite');
const artistsRouter = express.Router();

artistsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Artists WHERE Artists.is_currently_employed = 1', (err, artists) => {
        if(err){
            next(err);
        } else {
            res.status().json({ artirts: artists });
        }
    })
});

artistsRouter.param('artistsId', (req, res, next, artistId) => {

});

module.exports = artistsRouter;