// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controllers';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();
const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

// router.get('/books/:id', booksController.getById);
// router.post('/books/', validationBook, booksController.create);
// router.put('/books/:id', validationBook, booksController.update);

export default router;