import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  // Array de categorias
  categorias = [];
  
  // Array de productos
  productos = [];

  constructor(private servicio: ServiceService) { }

  ngOnInit(): void {
    this.servicio.getInfo().subscribe((res: any) => {

      // Organizamos las categorias
      this.categorias = res.categories;
      this.categorias.sort(function (a, b) {
        if (a.ordinal > b.ordinal) {
          return 1;
        }
        if (a.ordinal < b.ordinal) {
          return -1;
        }
        return 0;
      })
      // 

      // Organizamos Productos
      this.productos = res.products;
      this.productos.sort(function (a,b){
        if (a.product_data.categories[0].ordinal > b.product_data.categories[0].ordinal) {
          return 1;
        }
        if (a.product_data.categories[0].ordinal < b.product_data.categories[0].ordinal) {
          return -1;
        }
        return 0;
      })
      // 

    })


  }

}
