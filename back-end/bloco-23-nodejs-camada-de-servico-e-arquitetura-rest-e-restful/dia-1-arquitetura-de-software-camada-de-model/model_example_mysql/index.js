const express = require("express");
const app = express();
const port = 3000;

const author = require('./models/author');
const book = require('./models/book');

app.get('/authors', async (_req, res) => {
    const authors = await author.getAll();
    res.status(200).json(authors);
});

// app.get('/authors/:id', async (req, res) => {
// 	const { id } = req.params;
// 	const [author] = await author.findById(id);

// 	if (!author) return res.status(404).json({ message: 'Not found' });

// 	res.status(200).json(author);
// });

app.get('/books', async (req, res) => {
    const books = await book.getAll();
  
    res.status(200).json(books);
  });

app.listen(port, () => console.log('está na porta 3000'));
