const Products: { title: string }[] = [];

class Product {
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  save() {
    Products.push(this);
  }

  static fetchAll() {
    return Products;
  }
}

export default Product;
