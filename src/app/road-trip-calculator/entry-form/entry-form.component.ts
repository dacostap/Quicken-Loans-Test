import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { CripplingStudentDebt } from '../../_types/CripplingStudentDebt.type'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { getTransactions } from 'src/app/app.selectors';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  private calculations$: Observable<any>;
  public calculations: any = "tset";


  public studentOne: CripplingStudentDebt = {name: '', debt: 0};
  public studentTwo: CripplingStudentDebt = {name: '', debt: 0};
  public studentThree: CripplingStudentDebt = {name: '', debt: 0};

  // totals each student spent
  public studentOneTotal: number = 0;
  public studentTwoTotal: number = 0;
  public studentThreeTotal: number = 0;

  // each individual expense a student occurs is stored in this 
  // variable then when "added" with button is added to total and cleared 
  public personalExpenseOne: number = 0;
  public personalExpenseTwo: number = 0;
  public personalExpenseThree: number = 0;
  public testing: any[] =[];

  constructor(private  calculatorService: CalculatorService, private store: Store<AppState>) {


    this.calculations$ = store.select(getTransactions.transactions)
    this.calculations$.subscribe( testResp => {
      this.calculations = testResp;
    })
   }

  ngOnInit(): void {

  }
  
  // add expense to total and reset expense value
  public addExpense = (id: number): void => {

    if (id == 1) {

      this.studentOne.debt += +this.personalExpenseOne;
      this.personalExpenseOne = 0;
    }
    if (id == 2) {

      this.studentTwo.debt += +this.personalExpenseTwo;
      this.personalExpenseTwo = 0;
    }
    if (id == 3) {

      this.studentThree.debt += +this.personalExpenseThree;
      this.personalExpenseThree = 0;
    }

  }

  public calculate = (): void => {

    const totalExpenses = +this.studentOne.debt + +this.studentTwo.debt + +this.studentThree.debt;


    // send services names and debts of each student so it can return who owes what
    this.calculatorService.calculate(this.studentOne, this.studentTwo, this.studentThree);



  }


}
