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
}

export default Cart;
