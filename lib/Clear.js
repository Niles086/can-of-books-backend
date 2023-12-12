require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const Book = require('./Book');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Books cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();