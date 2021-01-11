import { DetailsComponent } from './../profit-expense/details/details.component';
import { Routes } from '@angular/router';
import { ProfitExpenseComponent } from './../profit-expense/profit-expense.component';
import { StatisticsComponent } from './../profit-expense/statistics/statistics.component';
// Archivo de las rutas hijas que contiene el container de dashboard

export const dashBoardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'profit-expense', component: ProfitExpenseComponent },
  { path: 'detail', component: DetailsComponent },
];
