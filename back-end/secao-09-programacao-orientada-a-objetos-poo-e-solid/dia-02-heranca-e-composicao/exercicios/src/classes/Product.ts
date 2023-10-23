class Product {
  constructor (private _name: string, private _price: number) {}

  get name() { return this._name; }
  get price() { return this._price; }
}

export default Product;