import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Model } from '../models/model';


@Injectable({
  providedIn: 'root',
})
export class Transaction {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5000/api/transactions';

  getTransactions(){
    return this.http.get<Model[]>(this.apiUrl);
  }
  addTransaction(Transaction: Transaction){
    return this.http.post(this.apiUrl, Transaction);
  }
}
