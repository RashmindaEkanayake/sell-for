import { Router } from 'express';
import { getBooks, getBookById } from '../controllers/bookController';
import { checkout, getOrderById } from '../controllers/orderController';

const router = Router();

// Books
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

// Orders / Checkout
router.post('/checkout', checkout);
router.get('/orders/:id', getOrderById);

export default router;
