import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
	public pieChartData =  {
		chartType: 'PieChart',
		dataTable: [
			['Task', 'Hours per Day'],
			['Work',     11],
			['Eat',      2],
			['Commute',  2],
			['Watch TV', 2],
			['Sleep',    7]
		],
		options: {'title': 'Tasks'},
	};
  constructor() { }

  ngOnInit() {
  }

}
