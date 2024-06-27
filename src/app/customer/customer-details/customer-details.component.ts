import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../customer-details.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  createForm!: FormGroup;
  customerData: any;
  isViewButtonDisabled: boolean = true;
  isEditButtonDisable: boolean = true;
  isDeleteButtonDisabled: boolean = true;
  customerList: boolean = true;

  createNewCustomer: boolean = false;
  showCreateOrUpdateButton: boolean = false;
  isEditMode: boolean = false;
  headerName: any = "Create";
  createOrUpdateButtonText: any = '';

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Count';
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  view: [number, number] = [600, 400];

  chartData: any[] = [];

  clientDataCols = [
    { field: 'id', header: 'Id', type: 'text', textAlign: "center", },
    { field: 'name', header: 'Name', type: 'text', textAlign: "center" },
    { field: 'surname', header: 'Surname', type: 'text', textAlign: "center" },
    { field: 'category', header: 'Category', type: 'text', textAlign: "center" },
    { field: 'value', header: 'Value', type: 'number', textAlign: "center" }
  ]
  constructor(private customerDetailsService: CustomerDetailsService, private router: Router, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      category: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.customerData = this.customerDetailsService.getAll();
    this.loadChartData();
  }

  createProfile() {
    this.createForm.reset();
    this.createForm.enable();
    this.showCreateOrUpdateButton = true;
    this.createOrUpdateButtonText = "Save";
    this.createNewCustomer = true;
    this.customerList = false;
   
  }
  
  // #region create/update customer
  
  createOrUpdateCustomer(): void {
    this.showCreateOrUpdateButton = true;
    const newCustomer = {
      id: this.createForm.value.id,
      name: this.createForm.value.name,
      surname: this.createForm.value.surname,
      category: this.createForm.value.category,
      value: this.createForm.value.value,
    };
    this.createOrUpdateButtonText = "Save";
    this.customerDetailsService.createOrUpdateCustomer(newCustomer);
    this.customerData = this.customerDetailsService.getAll();
    this.createForm.reset();
    this.createNewCustomer = false;
    this.customerList = true;
  }
  // #endregion

  // #region back function
  goBack() {
    this.createNewCustomer = false;
    this.customerList = true;
    this.isViewButtonDisabled = true;
    this.isDeleteButtonDisabled = true;
  }
  // #endregion

// #region select customer
  selectedCustomer(event: any) {
    this.isViewButtonDisabled = false;
    this.isEditButtonDisable = false;
    this.isDeleteButtonDisabled = false;
  }
  // #endregion

  // #region view event
  viewCustomerDetails(selectedData: any) {
    this.headerName = "View";
    this.showCreateOrUpdateButton = false;
    this.disableForm();
    this.createForm.patchValue({
      id: selectedData.id,
      name: selectedData.name,
      surname: selectedData.surname,
      category: selectedData.category,
      value: selectedData.value
    });
    this.createNewCustomer = true;
    this.customerList = false;
  }
  // #endregion

  disableForm() {
    this.createForm.disable();
  }


  //#region edit customer data event 
  editCustomerDetails(selectedData: any) {
    this.headerName = "Edit";
    this.createForm.enable();
    this.createOrUpdateButtonText = "Update";
    this.showCreateOrUpdateButton = true;
    this.createForm.patchValue({
      id: selectedData.id,
      name: selectedData.name,
      surname: selectedData.surname,
      category: selectedData.category,
      value: selectedData.category
    });
    this.createNewCustomer = true;
    this.customerList = false;
  }
  // #endregion

  //#region delete event 
  deleteCustomerData(event: any) {
    this.customerDetailsService.deleteCustomer(event.id);
    this.customerData = this.customerDetailsService.getAll();
  }
  // #endregion

  // #region serach event
  globalSearchValue(searchValue: any): void {
    const filteredData = this.customerData.filter((customer: { name: string; }) => {
      return customer.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    this.customerData = filteredData;
    this.loadChartData();
  }
  // #endregion

//#region chart
  loadChartData(): void {
    const categoryCounts = this.customerData.reduce((acc: { [x: string]: any; }, customer: { category: string | number; }) => {
      acc[customer.category] = (acc[customer.category] || 0) + 1;
      return acc;
    }, {});

    this.chartData = Object.keys(categoryCounts).map(key => ({
      name: key,
      value: categoryCounts[key]
    }));
  }
// #endregion

// #region clear search data
clearSerach(){
  this.customerData = this.customerDetailsService.getAll();
  this.loadChartData();

}
// #endregion

}