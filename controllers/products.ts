import { Request, Response } from 'express';
import Product from '../models/product';

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
  // products.push({ title: req.body.title });
  const product: Product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

export const getProducts = (req: Request, res: Response) => {
  //   res.send('hello');
  const products: {
    title: string;
  }[] = Product.fetchAll();

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
