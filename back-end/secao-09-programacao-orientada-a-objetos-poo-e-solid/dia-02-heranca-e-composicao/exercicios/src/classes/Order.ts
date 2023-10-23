import Client from "./Client";
import Product from "./Product";

class Order {
  private _client: Client;
  private _products: Product[] = [];
  private _payment: string;
  private _discount = 0;

  constructor(client: Client, products: Product[], payment: string, discount?: number) {
    this._client = client;
    this._products = this.setProducts(products, true) || [];
    this._payment = payment;
    this.discount = discount;
  }

  get client(): Client { return this._client; }
  get products(): Product[] { return this._products; }
  get payment(): string { return this._payment; }
  get discount(): number { return this._discount; }

  set client(value: Client) { this._client = value; }

  setProducts(value: Product[], constructor = false) {
    const newProducts = value instanceof Array ? [...this.products, ...value] : [...this.products, value];
    if (newProducts.length === 0) {
      throw new Error('The order must have at least one item.');
    } else {
      if (constructor) return newProducts;
      this._products = newProducts;
    }
  }

  set payment(value: string) {
    this._payment = value;
  }

  set discount(value: number | undefined) {
    if (!value || value < 0 || value >= 0.5) {
      throw new Error('The discount represents a percentage value in decimal and must be between 0 and 0.5');
    }
    this._discount = value;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this.getTotal() * (1 - this.discount);
  }
}

export default Order;