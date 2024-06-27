import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'',
      children:[
        {
          path:'customer-details',
          loadChildren:()=> import('./customer-details/customer-details.module').then(m=>m.CustomerDetailsModule)
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
