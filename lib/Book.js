require('dotenv').config();
const moogoose = require('mongoose');

const bookSchema = new moogoose.Schema({
    title: String,
    description: String,
    status: Boolean
});

const Book = moogoose.model('Book', bookSchema);


module.exports = Book;

