const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "gallery" SET "likes" = likes +1 Where "id" = $1;`
    pool.query(queryText, [galleryId]).then((result) => {
        console.log(`Updated`, result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "id";`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    let newPhoto = req.body;
    console.log(newPhoto);
    const queryText = `INSERT INTO "gallery" (path, description, likes) VALUES ($1, $2, 0);`;
    pool.query(queryText, [newPhoto.path, newPhoto.description])
    .then((result) => {
        console.log(`Photo Added`, result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}) //END POST Route

module.exports = router;