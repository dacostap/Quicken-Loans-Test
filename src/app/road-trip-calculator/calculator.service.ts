import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CripplingStudentDebt } from '../_types/CripplingStudentDebt.type';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

import * as CalcActions from './calculator.actions';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public httpOptions: { headers: HttpHeaders};

  constructor(public http: HttpClient, private store: Store<AppState>) {

    this.httpOptions = {  headers : this.headers }

   }

  public calculate = (studentOne: CripplingStudentDebt, studentTwo: CripplingStudentDebt, studentThree: CripplingStudentDebt): void => {
    // clean up later if you have time
    const body = {
      studentOneName: studentOne.name, studentOneDebt: studentOne.debt, studentTwoName: studentTwo.name, studentTwoDebt: studentTwo.debt,
      studentThreeName: studentThree.name, studentThreeDebt: studentThree.debt
    };

    const url = 'http://localhost:4201/post-test';

    this.http.post<any>(url, body).subscribe((response): void => {

      // contains the instructions sent back from the POST call detailing what everyone owes or is owed
      this.store.dispatch(new CalcActions.SetTransactionsAction(response.instructions))

    }, (): void => {

    });



  }



}
