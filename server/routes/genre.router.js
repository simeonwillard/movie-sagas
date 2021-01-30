const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // getting genres for individual movie
  const id = req.params.id;
  const sqlText = `SELECT "movies".title, "genres".name FROM "movies_genres"
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  JOIN "genres" ON "movies_genres".genre_id = "genres".id
  WHERE "movies".id = $1;`;

  pool.query(sqlText, [id])
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error getting genres for the movie', error);
      res.sendStatus(500);
  });
});

module.exports = router;