import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
       loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)        
    },
    {
        path: 'customer',
       loadChildren:()=>import('./customer/customer.module').then((m)=>m.CustomerModule)        
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
