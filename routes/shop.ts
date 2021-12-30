import express, { Router } from 'express';
// import path from 'path';
import {
  getProducts,
  getCart,
  getCheckout,
  getIndex,
  getOrders,
  getSingleProduct,
  postCart,
} from '../controllers/shop';
// import rootDir from '../utils/path';

const router: Router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getSingleProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;
