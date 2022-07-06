"use strict";
// ./routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controllers_1 = __importDefault(require("../controllers/books.controllers"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const router = (0, express_1.Router)();
const booksController = new books_controllers_1.default();
const booksSlashId = '/books/:id';
router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middleware_1.default, booksController.create);
router.put(booksSlashId, books_middleware_1.default, booksController.update);
router.delete(booksSlashId, booksController.remove);
// router.get('/books/:id', booksController.getById);
// router.post('/books/', validationBook, booksController.create);
// router.put('/books/:id', validationBook, booksController.update);
exports.default = router;
