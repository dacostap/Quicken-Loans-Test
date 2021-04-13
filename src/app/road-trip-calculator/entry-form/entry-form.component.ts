import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  public studentOneTotal: number = 0;
  public studentTwoTotal: number = 0;
  public studentThreeTotal: number = 0;
  public personalExpenseOne: number = 0;
  public personalExpenseTwo: number = 0;
  public personalExpenseThree: number = 0;

  constructor(private  calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }
  
  // add expense to total and reset expense value
  public addExpense = (id: number): void => {
    // console.log( 'personalExpenseOne =', this.personalExpenseOne)
    if (id == 1) {

      this.studentOneTotal += +this.personalExpenseOne;
      this.personalExpenseOne = 0;
    }
    if (id == 2) {

      this.studentTwoTotal += +this.personalExpenseTwo;
      this.personalExpenseTwo = 0;
    }
    if (id == 3) {

      this.studentThreeTotal += +this.personalExpenseThree;
      this.personalExpenseThree = 0;
    }

  }

  public calculate = (): void => {

    const totalExpenses = +this.studentOneTotal + +this.studentTwoTotal + +this.studentThreeTotal;

    console.log("total expenses is ", totalExpenses);

    this.calculatorService.testEndpoint(this.studentOneTotal, this.studentTwoTotal, this.studentThreeTotal);

  }


}
