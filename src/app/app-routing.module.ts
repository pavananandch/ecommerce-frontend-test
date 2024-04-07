import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent,
  pathMatch: "full"
},{
  path: "product-form",
  component: ProductFormComponent,
  pathMatch: "full"
},{
  path: "**",
  redirectTo: "/home"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
