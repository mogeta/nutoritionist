import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-chart-page',
	templateUrl: './chart-page.component.html',
	styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
	// グラフの表示サイズ
	view: any[] = [700, 400];

	// 設定
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = '国';
	showYAxisLabel = true;
	yAxisLabel = '人口';

	// カラーテーマ
	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// サンプルデータ
	sampleData = [
		{name: new Date(), value: '100'},
		{name: 'France', value: '200'},
		{name: 'Japan', value: '300'}
	];

	constructor() {
	}

	ngOnInit() {
		setTimeout( () =>{
			console.log('hide');
			this.sampleData.push({name: 'hoge', value: '800'});
			this.sampleData[3] = {name: 'hoge', value: '800'};
		}, 2000);
	}

}
