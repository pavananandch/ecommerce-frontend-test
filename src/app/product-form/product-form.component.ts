import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product = {
    name: "",
    price: 0,
    q: 0
  }
  isEdit=false;
  constructor(private dataService: DataService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    if (this.dataService.selectedProduct && this.dataService.selectedProduct.name) {
      this.isEdit = true;
      this.product = {...this.dataService.selectedProduct};
      this.dataService.selectedProduct = {};
    } else {
      this.isEdit = false;
      // this.router.navigate(['/']);
    }
  }

  handleAddProduct() {
    this.dataService.addProduct(this.product).subscribe({
      next: (res) => {
        console.log({res});
        alert("Added product succesfully");
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log({error});
        this.router.navigate(['/home']);
      }
    })
  }

  handleEditProduct() {
    this.dataService.editProduct(this.product).subscribe({
      next: (res) => {
        console.log({res});
        alert("Updated product succesfully");
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log({error});
        // this.router.navigate(['/home']);
      }
    })
  }

  handleBack() {
    this.location.back();
  }

}
