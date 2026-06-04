import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
     new Chart('expenseChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Expenses',
          data: [1200, 2500, 1800, 3200]
        }]
      }
    });
   
  }
}
