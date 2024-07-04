import { Routes } from '@angular/router';
import { TheoryOfAccountsComponent } from './modules/accounting/theory-of-accounts/theory-of-accounts.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { CategorySelectionModalComponent } from './components/category-selection-modal/category-selection-modal.component';
import {ReviewerNameComponent} from "./components/reviewer-name/reviewer-name.component";

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
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'select-category',
    component: CategorySelectionModalComponent
  },
  {
    path: 'path-to-reviewer-name',
    component: ReviewerNameComponent
  },
  {
    path: 'add-question',
    component: QuestionFormComponent
  },
];
