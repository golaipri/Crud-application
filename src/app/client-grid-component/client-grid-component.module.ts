import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientGridComponentComponent } from './client-grid-component.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    SliderModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbRatingModule,
    InputTextModule,
    RadioButtonModule ,
    TooltipModule,
  ],
  declarations: [
    ClientGridComponentComponent
  ],
  exports: [
    ClientGridComponentComponent
  ],
})
export class ClientGridComponentModule { }
