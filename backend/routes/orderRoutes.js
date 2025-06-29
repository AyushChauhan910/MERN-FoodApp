import express from 'express';
import { createOrder, getOrderSummary, updateOrderRating } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/:id', auth, getOrderSummary);
router.put('/:id/rating', auth, updateOrderRating);

export default router;
