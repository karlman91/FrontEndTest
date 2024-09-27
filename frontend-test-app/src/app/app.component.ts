import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Producto from './Model/entities/producto';
import { ProductoService } from './services/producto-service.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Aplication test';

  productos: Producto[] = [];
  apiUrl: any;
  http: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(
      data => this.productos = data,
      error => console.log(error)
    );
  }

  addProducto(nombre: string, precio: number, id_categoria: number ): void {
    let producto : Producto = {id: 0,nombre: nombre, precio: precio.toString(), categoriaId: id_categoria } 
    this.productoService.addProducto(producto).subscribe(data => {
    });
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(data => {

    });
  }


}
