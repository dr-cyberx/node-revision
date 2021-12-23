import express, { Router } from 'express';
import {
  getAddProduct,
  postAddProduct,
} from '../controllers/products';

const router: Router = express.Router();

router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

export default router;
