/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
import { Request, Response } from 'express';
import Cart from '../models/cart';
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
  Product.fetchAll((product: any) => {
    res.render('shop/index.ejs', {
      prods: product,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

export const getCart = (req: Request, res: Response): void => {
  Cart.getCart((cart: any) => {
    Product.fetchAll((prod: any) => {
      const cartProduct: any = [];
      prod.map((pro: any) => {
        const cartproductdata = cart.products.find(
          (p: { id: any }) => p.id === pro.id,
        );
        cartProduct.push({ productdata: pro, qty: cartProduct.qty });
        if (cartproductdata) {
        }
        res.render('shop/cart.ejs', {
          pageTitle: 'Your Cart',
          path: '/cart',
          product: cartProduct,
        });
      });
    });
  });
};

export const getOrders = (req: Request, res: Response): void => {
  res.render('shop/orders.ejs', {
    pageTitle: 'Your orders',
    path: '/orders',
  });
};

export const getCheckout = (req: Request, res: Response) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout ',
  });
};

export const getSingleProduct = (req: Request, res: Response) => {
  const { productId } = req.params;
  Product.findById(productId, (product: any) => {
    res.render('shop/product-detail', {
      product,
      pageTitle: product.title,
      path: '/products',
    });
  });
};

export const postCart = (req: Request, res: Response) => {
  const { productId } = req.body;
  Product.findById(productId, (product: any) => {
    Cart.addProduct(productId, product.price);
  });
  res.send(productId);
};
