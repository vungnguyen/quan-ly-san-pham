import {Product} from "./product";

export class ProductManager {
    private products:Product[] = [];
    constructor() {
    }
    get getAll() {
        return this.products;
    }
    set add(product:Product) {
        this.products.push(product);
    }
}