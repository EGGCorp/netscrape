const db = require('./models');

const dbController = {};

dbController.addMovies = (queryValue) => {
    const q = ''
    db
        .query(q)
}

dbController.getMovies = (queryValue) => {
    const q = 'Select * from movies where ' + queryValue + ''
    db
        .query(q)
}

dbController.getMoviesTest = () => {
    const q = 'Select * from movies'
    db
        .query(q)
        .then((result) => {console.log(result)})
        .catch(err => console.log(err))
}

module.exports = dbController;