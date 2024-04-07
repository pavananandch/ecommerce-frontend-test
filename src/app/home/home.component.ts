import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().subscribe({
      next: (res: any) => {
        console.log({res});
        this.products = res.products;
      },
      error: (error) => {
        console.log({error});
      }
    })
  }

  handleEdit(product: any) {
    this.dataService.selectedProduct = product;
    this.router.navigate(['/product-form']);
  }

  handleDelete(product: any) {
    this.products = this.products.filter((prod: any) => prod.name != product.name);
    this.dataService.deleteProducts(product._id).subscribe({
      next: (res) => {
        console.log({res});
        alert("Deleted product from DB");
      },
      error: (error) => {
        console.log({error});
      }
    })
  }

  handleAdd() {
    this.router.navigate(['/product-form']);
  }

}
