import { Component, OnInit } from '@angular/core';
import * as user from '../assets/user.json';
import Chart from 'chart.js/auto';
import { ChartNode } from './shared/models/chart-node';
import { UserInformation } from './shared/models/user-information';
import { Visualization } from './shared/enums/visualization';
import { Period } from './shared/enums/period';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  chart: any;
  numberOfMessgesChartNodes: ChartNode[] = [];
  userInformation!: UserInformation;
  selectedYear: number = 2024;
  selectedMonth: number = 1;
  selectedVisualization = Visualization.Messages;
  selectedPeriod = Period.Month;

  ngOnInit(): void {
    this.userInformation = user as unknown as UserInformation;
  }

  yearChanged(value: number): void{
    this.selectedYear = value;
  } 

  monthChanged(value: number): void{
    this.selectedMonth = value;
  }

  visualizationChanged(value: Visualization): void{
    this.selectedVisualization = value;
  }

  periodChanged(value: Period): void{
    this.selectedPeriod = value;
  }
}
