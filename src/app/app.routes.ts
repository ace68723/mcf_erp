import { SettlementComponent } from './settlements/settlements.component';
import { LoginComponent } from './login/login.componnet';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'settlement', component: SettlementComponent, canActivate: [AuthGuard]},
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard]},
  { path:  'login', component: LoginComponent},
  // { path: '**',redirectTo: 'home'  }
];
