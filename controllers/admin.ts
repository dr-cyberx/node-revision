import { Request, Response } from 'express';
import Product from '../models/product';

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('admin/add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req: Request, res: Response) => {
  // products.push({ title: req.body.title });
  const {
    title, imageUrl, description, price,
  } = req.body;

  const product: Product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

export const getProducts = (req: Request, res: Response): void => {
  Product.fetchAll((product: any) => {
    res.render('admin/products.ejs', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
