

import Categoria  from './categoria';


export default interface Producto {
    id?: number;
    nombre: string;
    precio: string;
    categoriaId: number;
    categoria?: Categoria;
  }