import { Component } from '@angular/core';
import { Transaction } from '../../services/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionList {
  transactions: any[]=[];
  constructor(private transactionService: Transaction) {}
  ngOnInit(){
    this.loadTransactions();
  }
  loadTransactions(){
    this.transactionService.getTransactions().subscribe((response: any) => {
        console.log(response.data);
      this.transactions = response.data;
    });
  }
}
