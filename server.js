require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./lib/Book');
const mongoose = require('mongoose');
const { getBooks, newBook , getBooksID, deleteBooksID, updateBookId} = require('./lib/Handler');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/books');

const PORT = process.env.PORT || 3000;



app.get('/books', getBooks);
app.get('/books/:id', getBooksID);
app.post('/books', newBook);
app.delete('/books/:id', deleteBooksID);
app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.put('/books/:id', updateBookId);

