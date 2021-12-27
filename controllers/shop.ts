import { Request, Response } from 'express';
import Product from '../models/product';

export const getProducts = (req: Request, res: Response) => {
  //   res.send('hello');
  Product.fetchAll((product: any) => {
    res.render('shop/product-list.ejs', {
      prods: product,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: product.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

export const getIndex = (req: Request, res: Response): void => {
  res.render('shop/index.ejs', {
    pageTitle: 'Shop',
    path: '/',
  });
};

export const getCart = (req: Request, res: Response): void => {
  res.render('shop/cart.ejs', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
};

export const getCheckout = (req: Request, res: Response) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout ',
  });
};