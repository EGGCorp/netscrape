const db = require('./models');

const dbController = {};

dbController.addMovies = (req, res, next) => {
    const q = ''
    db
        .query(q)
}

dbController.getMovies = (req, res, next) => {
    const q = 'Select * from movies where ' + queryValue + ''
    db
        .query(q)
}

dbController.getMoviesTest = (req, res, next) => {
    const q = 'Select * from movies'
    db
        .query(q)
        .then((result) => {console.log(result)})
        .catch(err => console.log(err))
}

module.exports = dbController;