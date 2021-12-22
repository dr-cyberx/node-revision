import { Request, Response } from 'express';
import products from '../db/Products';

export const getAppProduct = (req: Request, res: Response): void => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAppProduct = (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

export const Hello = (): void => {
  console.log('hello');
};
