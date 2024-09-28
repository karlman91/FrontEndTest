import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Producto  from '../Model/entities/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  private apiUrl = 'https://localhost:7225/api/producto';  // Cambia por la URL correcta de tu API

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  
  getProducto(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Producto>(url);
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto, this.httpOptions());
  }

  updateProducto(producto: Producto): Observable<any> {
    const url = `${this.apiUrl}/${producto.id}`;
    return this.http.put(url, producto, this.httpOptions());
  }

  deleteProducto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions());
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
