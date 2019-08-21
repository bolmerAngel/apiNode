const mongoose = require('mongoose');

const URI = 'mongodb://localhost/empleado';

mongoose.connect(URI)
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error(err));


module.exports = mongoose;