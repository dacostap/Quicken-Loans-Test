import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator/calculator.component';

const routes: Routes = [

  {
    path:'road-trip-calculator',
    component: CalculatorComponent,
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: '/#'
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
