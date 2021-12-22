import express, { Router } from 'express';
import { getAppProduct, postAppProduct } from '../controllers/products';

const router: Router = express.Router();

router.get('/add-product', getAppProduct);

// /admin/add-product => POST
router.post('/add-product', postAppProduct);

export default router;
