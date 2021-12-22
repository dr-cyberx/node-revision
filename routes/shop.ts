import express, { Router, Response, Request } from 'express';
// import path from 'path';
import products from '../db/Products';
// import rootDir from '../utils/path';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  //   res.send('hello');
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;
