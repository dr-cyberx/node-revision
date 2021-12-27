import express, { Router } from 'express';
import {
  getAddProduct,
  postAddProduct,
  getProducts,
} from '../controllers/admin';

const router: Router = express.Router();

router.get('/add-product', getAddProduct);

router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

export default router;
