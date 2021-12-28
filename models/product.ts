/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import fs from 'fs';
import path from 'path';

const p = path.join(
  path.dirname(require!.main!.filename),
  'data',
  'products.json',
);

const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err, fileContent: any) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

class Product {
  title: string;

  imageUrl: string;

  price: string;

  description: string;

  id!: string;

  constructor(
    title: string,
    imageUrl: string,
    price: string,
    description: string,
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products: any) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static findById(id: string, cb: any) {
    getProductsFromFile((products: any) => {
      const product = products.find((product: any) => product.id === id);
      cb(product);
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }
}

export default Product;
