
const Book = require('./Book');


async function newBook(request, response) {
    console.log('request.query', request.query);
    try {
        const book = new Book(request.body);
        console.log('book', book);
        const savedBook = await book.save();
        response.status(201).json(savedBook);
    } catch (error) {
        console.error('Error failed to get book' , error);
        response.status(500).json({ error: error.message });
    }
}

module.exports = {newBook}