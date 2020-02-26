import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ReadService } from '../services/read.service';
import { parse } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('bar1', {static: false}) barChart;
  @ViewChild('bar2', {static: false}) barChart2;
  @ViewChild('bar3', {static: false}) barChart3;
  
  bars: any;
  bar2: any;
  bar3: any;
  constructor(private read: ReadService) {
    let time = 1573562803000;
    console.log(new Date(1573562803000));
  }

  ionViewDidEnter() {
    this.createBarChart();
    this.createBarChart2();
    this.createBarChart3();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        datasets: [{
          label: 'Temperatura em K',
          data: [0, 37.6, 37.6, 37.6, 36.5, 36.7, 36.9, 36.3],
           // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createBarChart2() {
    this.bar2 = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['He Level'],
        datasets: [{
          label: 'Viewers in millions',
          data: [81.4, (100-81.4)],          
          borderWidth: 1,
          backgroundColor: ['green']
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createBarChart3() {
    this.bar3 = new Chart(this.barChart3.nativeElement, {
      type: 'bar',
      data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        datasets: [{
          label: 'Viewers in millions',
          data: [27.71, 27.71, 27.71, 27.71, 27.71, 27.71, 27.71, 27.71],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  selectDate(event): void {
    console.log(event.target.value);
    this.read.getReadingsByDate()
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );

  }

}
