import { Request, Response } from 'express';
import products from '../db/Products';

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

export const getProducts = (req: Request, res: Response) => {
  //   res.send('hello');
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

export const Hello = (): void => {
  console.log('hello');
};
