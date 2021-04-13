import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './road-trip-calculator/calculator.component';

const routes: Routes = [

  {
    path:'road-trip-calculator',
    component: CalculatorComponent,
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: '/road-trip-calculator'
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
