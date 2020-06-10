import { OperationComponent } from './views/operation/operation.component';
import { WarehouseCrudComponent } from './views/warehouse-crud/warehouse-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "warehouses",
    component: WarehouseCrudComponent
  },
  {
    path: "operations",
    component: OperationComponent
  },
  {
    path: "operations/:ns",
    component: OperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
