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

const writeIntoFile = (productArray: any[]): void => {
  fs.writeFile(p, JSON.stringify(productArray), (err) => {
    console.log(err);
  });
};

class Product {
  title: string;

  imageUrl: string;

  price: string;

  description: string;

  id!: string | null;

  constructor(
    id: string | null,
    title: string,
    imageUrl: string,
    price: string,
    description: string,
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products: any) => {
      if (this.id) {
        const existingProductIndex: number = products.findIndex(
          (prod: any) => prod.id === this.id,
        );
        const updatedProduct: any[] = [...products];
        updatedProduct[existingProductIndex] = this;
        writeIntoFile(updatedProduct);
      } else {
        this.id = Math.random().toString();
        products.push(this);
        writeIntoFile(products);
      }
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
