import express, { Router, Response, Request } from 'express';
import path from 'path';
import rootDir from '../utils/path';

const router: Router = express.Router();

const products: { title: string }[] = [];

// /admin/add-product => GET
router.get('/add-product', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export const Products = products;
export default router;
