import express, { Router } from 'express';
import {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
} from '../controllers/admin';

const router: Router = express.Router();

router.get('/add-product', getAddProduct);

router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

router.post('/edit-product/:productId', getEditProduct);

export default router;
