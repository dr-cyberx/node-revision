import { Request, Response } from 'express';
import Product from '../models/product';

export const getAddProduct = (req: Request, res: Response): void => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
    editing: false,
  });
};

export const postAddProduct = (req: Request, res: Response) => {
  // products.push({ title: req.body.title });
  const { title, imageUrl, description, price } = req.body;

  const product: Product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

export const getEditProduct = (req: Request, res: Response): void => {
  const { editMode } = req.query;

  if (!editMode) {
    res.redirect('/');
  }

  const { productId } = req.params;
  console.log(`${editMode} ${productId}`);

  Product.findById(productId, (product: any) => {
    if (!product) {
      console.log('run 1');
      res.redirect('/');
    }
    console.log('run 2', product);

    res.render('admin/edit-product', {
      pageTitle: 'Edit Products',
      path: '/admin/edit-product',
      editing: editMode,
      product,
    });
  });
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
