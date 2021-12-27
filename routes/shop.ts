import express, { Router } from 'express';
// import path from 'path';
import { getProducts } from '../controllers/products';
// import rootDir from '../utils/path';

const router: Router = express.Router();

router.get('/', getProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');

export default router;
