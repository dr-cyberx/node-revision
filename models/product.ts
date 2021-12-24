import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path';

class Product {
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  save() {
    const p: string = path.join(rootDir, 'data', 'product.json');
    fs.readFile(p, async (err: any | null, fileContent: any): Promise<void> => {
      let Products: any = [];

      if (!err) {
        Products = await JSON.parse(fileContent);
      }

      Products.push(this);
      fs.writeFile(p, JSON.stringify(Products), (error) => {
        if (error) {
          console.log('i am error => ', error);
        }
      });
    });
    // Products.push(this);
  }

  static fetchAll() {
    return [{ title: 'vishal' }];
  }
}

export default Product;
