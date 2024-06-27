import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
  private localStorageKey = 'customerData';

  constructor() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.customerData = JSON.parse(storedData);
    }
  }

  private customerData = [
    { id: 1, name: 'William ', surname: 'Turner', category: ' A', value: 2243772 },
    { id: 2, name: 'John ', surname: 'Constable', category: ' B', value: 1126000 },
    { id: 3, name: 'Thomas ', surname: 'Gainsborough', category: ' A', value: 296215 },
    { id: 3, name: 'Thomas ', surname: 'Gainsborough', category: ' A', value: 257363 },
    { id: 4, name: 'Joshua ', surname: 'Reynolds', category: ' C' ,value: 196750},
    { id: 5, name: 'George ', surname: 'Stubbs', category: ' B' , value: 204617}
  ];

  getAll() {
    return this.customerData;
  }
  createOrUpdateCustomer(customer: { id: number; name: string; surname: string; category: string; value:number }): void {
    debugger
    this.customerData.push(customer);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.customerData));
  }
  deleteCustomer(id: number): void {
    const index = this.customerData.findIndex(c => c.id === id);
    if (index !== -1) {
      this.customerData.splice(index, 1);
      this.saveData();
    }
  }

  private saveData(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.customerData));
  }
}
