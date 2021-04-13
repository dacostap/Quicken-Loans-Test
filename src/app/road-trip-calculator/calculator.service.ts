import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public httpOptions: { headers: HttpHeaders};

  constructor(public http: HttpClient) {

    this.httpOptions = {  headers : this.headers }

   }

  public testEndpoint = (studentOneTotal: number, studentTwoTotal: number, studentThreeTotal: number): void => {
    const body = { amountOne: studentOneTotal, amountTwo: studentTwoTotal, amountThree: studentThreeTotal };
    const url = 'http://localhost:4201/post-test';
    this.http.post<any>(url, body).subscribe((response): void => {
      console.log("testing response should be total of all 3 ", response);

      console.log("total ", response.totalExpenses);
      console.log("avg ", response.averageExpense);
      console.log("student one owes ", response.studentOneDebt);
    }
    )
  }

  // public calculate = (): void => {
  //   this.http.post<any>('http://localhost:4201/calculate', null).subscribe((response): void => {
  //     console.log("testing response ", response);
  //   }
  //   )
  // }

}
