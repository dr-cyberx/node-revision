import express, { Router } from 'express';
// import path from 'path';
import {
  getProducts,
  getCart,
  getCheckout,
  getIndex,
} from '../controllers/shop';
// import rootDir from '../utils/path';

const router: Router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);

export default router;
