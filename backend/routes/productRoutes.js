import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = express.Router();

// Public routes
router.get('/', getProducts); // GET /api/v1/products?page=1&limit=10
router.get('/:id', getProductById); // GET /api/v1/products/:id

// Admin-protected routes
router.post('/', auth, admin, createProduct); // POST /api/v1/products
router.put('/:id', auth, admin, updateProduct); // PUT /api/v1/products/:id
router.delete('/:id', auth, admin, deleteProduct); // DELETE /api/v1/products/:id

export default router;