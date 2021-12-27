import express, { Router } from 'express';
import {
  getAddProduct,
  postAddProduct,
} from '../controllers/admin';

const router: Router = express.Router();

router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

export default router;
