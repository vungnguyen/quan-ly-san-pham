import {Product} from "./product";
import {ProductManager} from "./managerProduct";
let laptop = new Product('laptop', 2000);
let iphone = new Product('iphone', 1000);
let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll)
