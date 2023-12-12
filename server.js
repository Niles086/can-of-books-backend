require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./lib/Book');
const mongoose = require('mongoose');
const { newBook } = require('./lib/Handler');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/books');

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {

  console.log(request.query);
  try{

    const filterQuery = {};

  if(request.query.title){
    filterQuery.title = request.query.title;
  }
  if(request.query.description){
    filterQuery.description = request.query.description;
  }
  if(request.query.status){
    filterQuery.status = request.query.status;
  }
  const books = await Book.find(filterQuery).select('title description status');
  response.json(books);

  console.log(books);
  }catch(error){
    console.error('Error failed to get book' , error);
    response.sendStatus(500).send('Error failed to get book');
  }
  
});

app.post('/books', newBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
