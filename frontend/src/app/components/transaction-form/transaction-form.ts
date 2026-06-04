import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {inject} from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css',
})
export class TransactionForm {
  @Output() saveTransaction = new EventEmitter<any>();

   private fb = inject(FormBuilder);

  transactionForm = this.fb.group({
    title: ['', Validators.required],
    amount: [0, Validators.required],
    category: ['', Validators.required],
    type: ['Expense', Validators.required],
    date: ['', Validators.required]
  });
 onSubmit(){
  if(this.transactionForm.invalid){
    return;
  }
  console.log(this.transactionForm.value);
  this.saveTransaction.emit(this.transactionForm.value);
  this.transactionForm.reset({
    type: 'Expense',
  });
 }

}

