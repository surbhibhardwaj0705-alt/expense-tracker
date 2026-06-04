import { Component } from '@angular/core';
import { SummaryCards } from '../../components/summary-cards/summary-cards';
import { Charts } from '../../components/charts/charts';
import { TransactionForm } from '../../components/transaction-form/transaction-form';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { Model } from '../../models/model';
import { Transaction } from '../../services/transaction';

@Component({
  selector: 'app-dashboard',
  imports: [SummaryCards, Charts, TransactionForm, TransactionList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  transactions: Model[] = [];
  totalIncome = 0;
 totalExpense = 0;
  balance = 0;
  constructor(private transactionService: Transaction) {}
  ngOnInit() {
    this.loadTransactions();
  }

  addTransaction(data: any) {

  this.transactionService
    .addTransaction(data)
    .subscribe({
      next: (res) => {
        console.log('Saved', res);
        this.loadTransactions();
        this.calculateSummary();
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.calculateSummary();
}
 loadTransactions(){
    this.transactionService.getTransactions().subscribe((response: any) => {
        console.log(response.data);
      this.transactions = response.data;
      this.calculateSummary();
    });
  }
calculateSummary() {

  this.totalIncome = this.transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);

  this.totalExpense = this.transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  this.balance =
    this.totalIncome - this.totalExpense;
}
}
