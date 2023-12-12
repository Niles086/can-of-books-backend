require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./lib/Book');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/books');

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {

  try{

    const filterQuery = {};

  if(request.query.title){
    filterQuery.title = request.query.title;
  }

  const books = await Book.find(filterQuery);
  response.json(books);

  console.log(books);
  }catch(error){
    console.error('Error failed to get book' , error);
    response.sendStatus(500).send('Error failed to get book');
  }
  
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
