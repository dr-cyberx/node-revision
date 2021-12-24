/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');

class Product {
  title: string;

  constructor(t: any) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require!.main!.filename),
      'data',
      'products.json',
    );
    fs.readFile(p, (err: any, fileContent: string) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err: any) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: (arg0: any) => void) {
    const p = path.join(
      path.dirname(require!.main!.filename),
      'data',
      'products.json',
    );
    fs.readFile(p, (err: any, fileContent: string) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent || ''));
    });
  }
}

export default Product;
