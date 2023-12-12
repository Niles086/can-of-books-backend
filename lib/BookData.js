require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./Book');

mongoose.connect(process.env.DATABASE_URL);

async function seed(){
    
    await Book.create({
        title: 'The Hobbit',
        description: 'Fantasy, Guy has powerful ring, evil guy wants it, the end',
        Status: true
    });

    await Book.create({
        title: 'The Last Apprentice',
        description: 'Fantasy, Apprentice learns magic, fights monsters, the end',
        Status: true
    });

    await Book.create({
        title: 'The Da Vinci Code',
        description: 'Guy undercovers secret, finds true, the end',
        Status: true
    });

    mongoose.disconnect();
}

seed();