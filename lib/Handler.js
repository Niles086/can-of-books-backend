
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

async function getBooks(request, response){
    try{
        const books = await Book.find({});
        response.json(books);
    }catch(error){
        console.error('Something went wrong' , error);
        response.status(500).send('Something went wrong' , error);
    }
}

async function getBooksID(request, response){
    const bookId = request.params.id
    console.log('Book ID:', bookId)
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
      
}

async function deleteBooksID(request, response){
    
    const bookId = request.params.id;

    try{
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if(!deletedBook){
            return response.status(404).json({message: 'Book not found'});
        }
        response.status(200).send('Book successfully deleted');
    }catch(error){
        console.error('Error has occurred while deleting book', error);
        response.status(500).send('Error occurred while deleting book' , error);
    }
}

module.exports = {newBook, getBooks, getBooksID, deleteBooksID};