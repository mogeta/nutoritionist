import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Item} from '../simple-list/simple-list.component';

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
	showLegend = false;
	showXAxisLabel = false;
	xAxisLabel = '国';
	showYAxisLabel = false;
	yAxisLabel = '人口';

	// カラーテーマ
	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// サンプルデータ
	sampleData: any[] = [
		{name: new Date(), value: '100'},
		{name: 'France', value: '200'},
		{name: 'Japan', value: '300'}
	];
	items: Observable<Item[]>;
	private itemsCollection: AngularFirestoreCollection<Item>;

	constructor(private afs: AngularFirestore) {
	}

	ngOnInit() {
		const objDate = new Date();
		objDate.setDate(objDate.getDate() - 199);
		this.itemsCollection = this.afs.collection('stress',
			ref => ref.where('created_at', '>=', objDate));
		this.items = this.itemsCollection.valueChanges();
		this.items.subscribe(snapshot => {
			snapshot.forEach((item) => {
				this.sampleData.push({'value': item.parameter, 'name':item.created_at});
				this.sampleData = [...this.sampleData]
			});
	});

		console.log(this.itemsCollection);
		console.log(this.items);
	}

}
