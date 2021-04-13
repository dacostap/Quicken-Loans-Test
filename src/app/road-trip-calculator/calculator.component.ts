import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor( private  calculatorService: CalculatorService) { 
    console.log("calc comp hit");
    // this.calculatorService.testEndpoint();
  }

  ngOnInit(): void {
  }

}
