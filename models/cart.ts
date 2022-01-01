/* eslint-disable no-useless-return */
import fs from 'fs';
import path from 'path';

const p = path.join(path.dirname(require!.main!.filename), 'data', 'cart.json');

class Cart {
  static addProduct(id: number, productPrice: number) {
    fs.readFile(p, (err: any, fileContent: any) => {
      let cart: any = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart?.products.findIndex(
        (prod: any) => prod.id === id,
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err1: any): void => {
        console.log(err1);
      });
    });
  }

  static deleteProduct(id: any, productPrice: any) {
    console.log(id);
    fs.readFile(p, (err: any, fileContent: any) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.product.find((prod: any) => prod.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.product.filter(
        (prod: any) => prod.id !== id,
      );
      updatedCart.totalPrice -= productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err1: any): void => {
        console.log(err1);
      });
    });
  }

  static getCart(cb: any) {
    fs.readFile(p, (err: any, fileContent: any) => {
      const cart = JSON.parse(fileContent);
      if (!err) {
        cb(cart);
      }
      cb(null);
    });
  }
}

export default Cart;
