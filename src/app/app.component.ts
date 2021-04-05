import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from '../models/product';
import {ProductService} from '../providers/api-products/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductsApp';
  displayedColumns: string[] = ['Id', 'Name', 'EntryDate', 'Price'];
  dataSource: any;

 constructor(private productService: ProductService,private router: Router){}

  ngOnInit()
  {
    this.displayProducts();
  }

  //To display the list of products by calling the get service
  public displayProducts()
  {
    this.productService.getProducts().subscribe(
      response =>
      {
        this.products = response;
        this.dataSource = new MatTableDataSource(this.products);
      },
      error =>
      {
        this.error = error;
      }
    )
  
  }

  //to display the details of the selected product
  public displayProductDetails(id: any)
  {
    this.productService.setProductId(id);
    this.router.navigate(['/product']);
  }


}

