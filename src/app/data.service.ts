import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedProduct: any = {};
  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.endpoint + 'products');
  }

  addProduct(product: any) {
    return this.http.post(this.endpoint + 'products', product);
  }

  editProduct(product: any) {
    return this.http.put(this.endpoint + 'products/'+product._id, product);
  }

  deleteProducts(id: string) {
    return this.http.delete(this.endpoint + 'products/' + id);
  }
}
