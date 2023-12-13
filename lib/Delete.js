const Book = require('./Book');  



async function deleteBook (req, res) { // deleteBook function
  const bookId = req.params.id;

  try {
    // Call the deleteBook method from the Book module
    const deletedBook = await Book.deleteBook(bookId);

    if (deletedBook) {
      res.status(200).json({ message: `Book with ID ${bookId} deleted.`, deletedBook });
    } else {
      res.status(404).json({ error: 'Book not found.' });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {deleteBook};