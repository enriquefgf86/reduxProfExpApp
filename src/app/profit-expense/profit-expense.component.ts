import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profit-expense',
  templateUrl: './profit-expense.component.html',
  styleUrls: ['./profit-expense.component.css']
})
export class ProfitExpenseComponent implements OnInit {
  profitForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
