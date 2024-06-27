import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { CustomerDetailsComponent } from './customer-details.component';
import { ClientGridComponentModule } from '../../client-grid-component/client-grid-component.module';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerDetailsRoutingModule,
    ClientGridComponentModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
    
  ]
})
export class CustomerDetailsModule { }
