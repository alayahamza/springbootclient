import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: any = 'http://localhost:8080/product';
  public product: Product = new Product();

  constructor(private http: HttpClient) { }

  public getAllProduct(): Observable<Product> {
    const url = this.baseUrl + '/list';
    return this.http.get<Product>(url);
  }

  public addProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/add';
    return this.http.post<Product>(url, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/update';
    return this.http.put<Product>(url, product);
  }

  public deleteProduct(id: number): Observable<Product> {
    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<Product>(url);
  }

  // Return assigned variable product
  getter() {
    return this.product;
  }

  // Set Value into variable product
  setter(product: Product) {
    this.product = product;
  }
}
