import { Component, OnInit,ViewChild } from '@angular/core';
import {Chart,registerables} from 'chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['1900','1950','2000','2050' ], 
	       datasets: [
          {
            label: "Europe",
            type:'bar',
            data: ['800','950','1200','2500'],
            // backgroundColor: 'rgba(255,206,86,0.2)'
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor:'rgba(0, 0, 0, 0.1)'
          },
          {
            label: "Africa",
            type:'bar',
            data: ['750','930','1200','2700'],
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor:'rgba(0, 0, 0, 0.1)'
          } ,
          {
            label: "Europe",
            type:'line',
            data: ['800','950','1200','2500'],
            backgroundColor: 'blue',
            borderColor:'blue'
          } ,
          {
            label: "Africa",
            type:'line',
            data: ['750','930','1200','2700'],
            backgroundColor: 'purple',
            borderColor:'purple'
          }
        ]
      },
      options: {
        maintainAspectRatio:false
      }
      
    });
  }

}
