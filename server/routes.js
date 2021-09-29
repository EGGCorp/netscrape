const express = require('express');
const dbController = require('./dbController');
const path = require('path');
const router = express.Router();

router.get('/test', 
    dbController.getMoviesTest, 
    (req, res) => res.status(200).json(res.locals.tasks)
);


module.exports = router;