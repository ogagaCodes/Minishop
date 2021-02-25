import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products = [
    {
      id: 1,
       title: "Addidas Shoe",
       price: 500,
      description: 'original addidas shoes at your finger tips',
      numberInStock: 21,
      outOfStock: false
     },
     {
      id: 4,
       title: "Gucci glasses",
       price: 860,
      description: 'See the world fro a luxurious perspective',
      numberInStock: 21,
      outOfStock: false
     },
     {
      id: 50,
       title: "Facial Cream",
       price: 800,
      description: 'light up ypur face',
      numberInStock: 71,
      outOfStock: false
     },
     {
      id: 6,
       title: "Sneakers",
       price: 800,
      description: 'original sneakers for your pleasure',
      numberInStock: 71,
      outOfStock: false
     },
     {
      id: 7,
       title: "women's bag",
       price: 120,
      description: 'Luxurious bag for your heartthrob',
      numberInStock: 32,
      outOfStock: false
     },
     {
      id: 8,
       title: "kiddy Toy",
       price: 900,
      description: 'mae your id smile with this',
      numberInStock: 200,
      outOfStock: false
     },
     {
      id: 9,
       title: "kiddy Toy",
       price: 600,
      description: 'mae your id smile with this',
      numberInStock: 200,
      outOfStock: false
     },
     {
      id: 10,
       title: "kiddy Toy",
       price: 5000,
      description: 'mae your id smile with this',
      numberInStock: 200,
      outOfStock: false
     },
     {
      id: 11,
       title: "kiddy Toy",
      price: 5000,
      description: 'mae your id smile with this',
      numberInStock: 200,
      outOfStock: false
    },
  ]


  constructor() { }

  getProduct() {
    return this.products;
  }

  getAProduct(id: Number) {
    return this.products.find(product => product.id === id);
  }
}
