import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',pathMatch: 'full',redirectTo: '/product'
  },
  // {
  //   path: 'product',loadChildren: () => import('../components/product/product.module').then(h => h.ProductModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
