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
  const {
    title, imageUrl, description, price,
  } = req.body;

  const product: Product = new Product(
    null,
    title,
    imageUrl,
    price,
    description,
  );
  product.save();
  res.redirect('/');
};

export const getEditProduct = (req: Request, res: Response): void => {
  const { editMode } = req.query;

  if (!editMode) {
    res.redirect('/');
  }

  const { productId } = req.params;

  Product.findById(productId, (product: any) => {
    if (!product) {
      res.redirect('/');
    }

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

export const postEditProduct = (req: Request, res: Response) => {
  const {
    productId, title, price, imageUrl, description,
  } = req.body;
  const updatedProduct: Product = new Product(
    productId,
    title,
    price,
    imageUrl,
    description,
  );
  console.log(updatedProduct);
};
