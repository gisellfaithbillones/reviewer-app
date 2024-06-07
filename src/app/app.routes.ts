import { Routes } from '@angular/router';
import { TheoryOfAccountsComponent } from './modules/accounting/theory-of-accounts/theory-of-accounts.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'theory-of-accounts',
    component: TheoryOfAccountsComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];
